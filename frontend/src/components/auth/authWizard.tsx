"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/buttons/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card"
import { Input } from "@/components/ui/input/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Lock, User, ArrowLeftRight } from "lucide-react" // آیکون‌ها

type Step = "login" | "register" | "forgot"

export function AuthWizard() {
  const [step, setStep] = useState<Step>("login")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`ارسال درخواست برای مرحله: ${step}`)
    // اینجا بعداً API واقعی اضافه میشه
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <Card className="w-full max-w-sm shadow-xl rounded-xl">
        <CardHeader className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            {step === "login" && <Lock className="w-7 h-7 text-blue-600" />}
            {step === "register" && <User className="w-7 h-7 text-green-600" />}
            {step === "forgot" && (
              <ArrowLeftRight className="w-7 h-7 text-orange-600" />
            )}
          </div>
          <CardTitle className="text-center text-xl font-bold">
            {step === "login" && "ورود به حساب کاربری"}
            {step === "register" && "ثبت‌نام کاربر جدید"}
            {step === "forgot" && "بازیابی رمز عبور"}
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            {step === "login" &&
              "برای ورود، ایمیل یا شماره موبایل خود را وارد کنید"}
            {step === "register" &&
              "اطلاعات خود را برای ایجاد حساب جدید وارد کنید"}
            {step === "forgot" &&
              "ایمیل یا شماره موبایل خود را برای بازیابی رمز عبور وارد کنید"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid gap-2">
                    <Label htmlFor="identifier">ایمیل یا شماره موبایل</Label>
                    <div className="relative">
                      <Input id="identifier" type="text" required />
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">رمز عبور</Label>
                      <button
                        type="button"
                        onClick={() => setStep("forgot")}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        فراموش کردید؟
                      </button>
                    </div>
                    <div className="relative">
                      <Input id="password" type="password" required />
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === "register" && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid gap-2">
                    <Label htmlFor="fullname">نام و نام خانوادگی</Label>
                    <div className="relative">
                      <Input id="fullname" type="text" required />
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="identifier">ایمیل یا شماره موبایل</Label>
                    <div className="relative">
                      <Input id="identifier" type="text" required />
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">رمز عبور</Label>
                    <div className="relative">
                      <Input id="password" type="password" required />
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === "forgot" && (
                <motion.div
                  key="forgot"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid gap-2">
                    <Label htmlFor="identifier">ایمیل یا شماره موبایل</Label>
                    <div className="relative">
                      <Input id="identifier" type="text" required />
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          {step === "login" && (
            <>
              <Button type="submit" className="w-full">
                ورود
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setStep("register")}
              >
                ثبت‌نام
              </Button>
            </>
          )}

          {step === "register" && (
            <>
              <Button type="submit" className="w-full">
                ثبت‌نام
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setStep("login")}
              >
                بازگشت به ورود
              </Button>
            </>
          )}

          {step === "forgot" && (
            <>
              <Button type="submit" className="w-full">
                ارسال لینک بازیابی
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setStep("login")}
              >
                بازگشت به ورود
              </Button>
            </>
          )}

          <Button variant="outline" className="w-full">
            ورود با گوگل
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
