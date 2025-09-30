"use client"

import { useState } from "react"
import { Button } from "@/components/ui/buttons/button"
import { Input } from "@/components/ui/input/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export function LoginStep({
  onSubmit,
  onForgot,
  onSwitch,
}: {
  onSubmit: (data: any) => void
  onForgot: () => void
  onSwitch: () => void
}) {
  const [showPassword, setShowPassword] = useState(false)

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

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">رمز عبور</Label>
          <span
            onClick={onForgot}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            فراموش کردید؟
          </span>
        </div>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="pl-10 pr-10"
          />
          <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          {showPassword ? (
            <EyeOff
              onClick={() => setShowPassword(false)}
              className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer"
            />
          ) : (
            <Eye
              onClick={() => setShowPassword(true)}
              className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>

      <Button type="submit" className="w-full cursor-pointer">
        ورود
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full cursor-pointer"
        onClick={onSwitch}
      >
        ثبت‌نام
      </Button>
    </form>
  )
}
