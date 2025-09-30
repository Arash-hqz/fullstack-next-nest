"use client"

import { Button } from "@/components/ui/buttons/button"
import { Input } from "@/components/ui/input/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

export function ForgotStep({
  onSubmit,
  onSwitch,
}: {
  onSubmit: (data: any) => void
  onSwitch: () => void
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    onSubmit(Object.fromEntries(form.entries()))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="identifier">ایمیل یا شماره موبایل</Label>
        <div className="relative">
          <Input id="identifier" name="identifier" type="text" required className="pl-10" />
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <Button type="submit" className="w-full cursor-pointer">
        ارسال لینک بازیابی
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full cursor-pointer"
        onClick={onSwitch}
      >
        بازگشت به ورود
      </Button>
    </form>
  )
}
