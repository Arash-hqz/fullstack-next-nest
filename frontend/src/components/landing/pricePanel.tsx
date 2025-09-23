"use client"

import React, { useEffect, useState } from "react"

/** نوع برای هر دارایی */
type AssetKey = "electricity" | "oil" | "gas" | "gold" | "btc"

type AssetPrice = {
  key: AssetKey
  label: string
  value: number | null
  unit: string
  change24h?: number | null // درصد تغییر 24h اگه در دسترس
  sparkline?: number[] // داده‌های کوچک برای Sparkline
}

/** props: می‌تونی apiEndpoints رو پاس بدی یا از mock استفاده کن */
export type PricePanelProps = {
  refreshInterval?: number // ms
  apiEndpoints?: Partial<Record<AssetKey, string>>
  className?: string
}

const DEFAULT_ASSETS: AssetPrice[] = [
  { key: "electricity", label: "قیمت برق", value: null, unit: "IRR/kWh", sparkline: [] },
  { key: "oil", label: "نفت (Brent)", value: null, unit: "USD/bbl", sparkline: [] },
  { key: "gas", label: "گاز", value: null, unit: "USD/MMBtu", sparkline: [] },
  { key: "gold", label: "طلا", value: null, unit: "USD/oz", sparkline: [] },
  { key: "btc", label: "بیت‌کوین", value: null, unit: "USD", sparkline: [] },
]

/** helper: فرمت عدد با جداکننده سه‌رقمی */
function formatNumber(n: number | null, unit = "") {
  if (n === null || n === undefined || Number.isNaN(n)) return "—"
  return `${n.toLocaleString()}${unit ? ` ${unit}` : ""}`
}

/** ساده‌ترین sparkline SVG از آرایه اعداد می‌سازه */
function Sparkline({ data = [] as number[] }: { data?: number[] }) {
  if (!data || data.length < 2) return <div className="h-6" />
  const w = 80
  const h = 24
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w
      const y = h - ((v - min) / range) * h
      return `${x},${y}`
    })
    .join(" ")
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="inline-block">
      <polyline points={points} fill="none" stroke="rgba(220,38,38,0.9)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricePanel({ refreshInterval = 60000, apiEndpoints = {}, className = "" }: PricePanelProps) {
  const [assets, setAssets] = useState<AssetPrice[]>(DEFAULT_ASSETS)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /** نمونه fetch: اگر آدرس وجود داشته باشه صدا زده میشه، در غیر این صورت mock data قرار میگیره */
  async function fetchPricesOnce() {
    setLoading(true)
    setError(null)
    try {
      const next: AssetPrice[] = JSON.parse(JSON.stringify(DEFAULT_ASSETS)) // clone

      // BTC via CoinGecko (public)
      if (apiEndpoints.btc) {
        // اگر apiEndpoints.btc داده شده، از آن استفاده می‌کنیم
        const res = await fetch(apiEndpoints.btc)
        const data = await res.json()
        // انتظار داریم داده مشابه CoinGecko باشد: {market_data: {current_price: {usd: ...}, price_change_percentage_24h: ...}}
        // اما برای flexibility، کار با برخی ساختارها انجام شده
        const price = data?.market_data?.current_price?.usd ?? data?.price ?? data?.current_price ?? null
        const change = data?.market_data?.price_change_percentage_24h ?? data?.change24h ?? null
        next.find(a => a.key === "btc")!.value = typeof price === "number" ? price : Number(price)
        next.find(a => a.key === "btc")!.change24h = typeof change === "number" ? change : null
      } else {
        // fallback: CoinGecko public
        const r = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true")
        const d = await r.json()
        next.find(a => a.key === "btc")!.value = d.market_data?.current_price?.usd ?? null
        next.find(a => a.key === "btc")!.change24h = d.market_data?.price_change_percentage_24h ?? null
        if (d.market_data?.sparkline_7d?.price) next.find(a => a.key === "btc")!.sparkline = d.market_data.sparkline_7d.price.slice(-12)
      }

      // Gold (example) - if endpoint provided use it; otherwise mock using placeholder API (some providers need key)
      if (apiEndpoints.gold) {
        const r = await fetch(apiEndpoints.gold)
        const d = await r.json()
        // adapt according to returned structure
        next.find(a => a.key === "gold")!.value = Number(d.price ?? d?.gold?.price ?? null)
      } else {
        // mock: قیمت طلا فرضی
        next.find(a => a.key === "gold")!.value = 1975.12
      }

      // Oil (Brent) - sample fallback mock or public API if provided
      if (apiEndpoints.oil) {
        const r = await fetch(apiEndpoints.oil)
        const d = await r.json()
        next.find(a => a.key === "oil")!.value = Number(d.price ?? d?.brent?.price ?? null)
      } else {
        next.find(a => a.key === "oil")!.value = 85.34
      }

      // Gas - mock or endpoint
      if (apiEndpoints.gas) {
        const r = await fetch(apiEndpoints.gas)
        const d = await r.json()
        next.find(a => a.key === "gas")!.value = Number(d.price ?? d?.gas?.price ?? null)
      } else {
        next.find(a => a.key === "gas")!.value = 6.12
      }

      // Electricity: این مورد محلیه — اغلب باید از دیتابیس یا API شرکتی بیاد. اگر provided use it، وگرنه mock بر اساس IRR/kWh
      if (apiEndpoints.electricity) {
        const r = await fetch(apiEndpoints.electricity)
        const d = await r.json()
        next.find(a => a.key === "electricity")!.value = Number(d.price ?? d?.tariff ?? null)
      } else {
        // mock نمونه (ریال بر کیلووات ساعت)
        next.find(a => a.key === "electricity")!.value = 1200
        next.find(a => a.key === "electricity")!.unit = "IRR / kWh"
      }

      setAssets(next)
    } catch (err: any) {
      console.error(err)
      setError("خطا در دریافت قیمت‌ها")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPricesOnce()
    const t = setInterval(fetchPricesOnce, refreshInterval)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshInterval, JSON.stringify(apiEndpoints)])

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-white rounded-2xl p-4 shadow-md border border-neutral-100">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold">قیمت‌های لحظه‌ای</h4>
          <div className="text-xs text-neutral-500">{loading ? "در حال آپدیت..." : error ? "خطا" : "آخرین بروزرسانی"}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {assets.map(a => (
            <div key={a.key} className="min-h-[88px] p-3 rounded-lg border hover:shadow-lg transition bg-neutral-50">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs text-neutral-500">{a.label}</div>
                  <div className="text-lg font-semibold mt-1">{formatNumber(a.value, a.unit)}</div>
                </div>
                <div className="text-right">
                  <Sparkline data={a.sparkline} />
                  <div className={`text-sm mt-1 ${a.change24h && a.change24h > 0 ? "text-emerald-600" : a.change24h && a.change24h < 0 ? "text-red-600" : "text-neutral-500"}`}>
                    {a.change24h ? `${a.change24h.toFixed(2)}%` : "—"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-xs text-neutral-400">
          توجه: داده‌ها نمونه هستند. برای دادهٔ واقعی آدرس‌های API را در props `apiEndpoints` قرار دهید.
        </div>
      </div>
    </div>
  )
}
