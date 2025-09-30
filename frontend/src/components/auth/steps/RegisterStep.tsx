"use client"

import { useState } from "react"
import { Button } from "@/components/ui/buttons/button"
import { Input } from "@/components/ui/input/input"
import { Label } from "@/components/ui/label"
import { User, Phone, Lock, Eye, EyeOff } from "lucide-react"

export function RegisterStep({
  onSubmit,
  onSwitch,
}: {
  onSubmit: (data: any) => void
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
        <Label htmlFor="fullname">نام و نام خانوادگی</Label>
        <div className="relative">
          <Input id="fullname" name="fullname" type="text" required className="pl-10" />
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="identifier">ایمیل یا شماره موبایل</Label>
        <div className="relative">
          <Input id="identifier" name="identifier" type="text" required className="pl-10" />
          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">رمز عبور</Label>
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
        ثبت‌نام
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
