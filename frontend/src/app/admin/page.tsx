'use client';

import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../components/layout/admin/layout'
import { adminApi } from '../services/adminApi'
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts'

export default function AdminHome() {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  )
}

function DashboardContent() {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    adminApi.getStats().then((r) => setStats(r.data))
  }, [])

  const smallData = [
    { name: 'Jan', uv: 400 },
    { name: 'Feb', uv: 300 },
    { name: 'Mar', uv: 500 },
  ]

  if (!stats) return <div className="p-6">در حال بارگذاری آمار...</div>

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-6">
        <StatCard title="کاربران" value={stats.users} />
        <StatCard title="پروژه‌ها" value={stats.projects} />
        <StatCard title="درآمد (تومان)" value={stats.revenue.toLocaleString()} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
        <h3 className="font-semibold mb-3">روند ماهیانه</h3>
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <BarChart data={smallData}>
              <Bar dataKey="uv" fill="#ef4444" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      <div className="text-red-600 text-xl">▴</div>
    </div>
  )
}