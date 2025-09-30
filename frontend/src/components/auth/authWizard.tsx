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
import { Lock, User, ArrowLeftRight } from "lucide-react"

// Steps
import { LoginStep } from "./steps/LoginStep"
import { RegisterStep } from "./steps/RegisterStep"
import { ForgotStep } from "./steps/ForgotStep"

type Step = "login" | "register" | "forgot"

export function AuthWizard() {
  const [step, setStep] = useState<Step>("login")

  const handleSubmit = async (formData: any) => {
    console.log("📤 ارسال دیتا:", { step, formData })
    // بعداً اینجا: await fetch("/api/auth", { method: "POST", body: JSON.stringify(formData) })
  }

  const handleGoogleLogin = () => {
    console.log("🔗 گوگل لاگین (بعداً API اضافه میشه)")
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
          <AnimatePresence mode="wait">
            {step === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LoginStep onSubmit={handleSubmit} onForgot={() => setStep("forgot")} onSwitch={() => setStep("register")} />
              </motion.div>
            )}
            {step === "register" && (
              <motion.div
                key="register"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <RegisterStep onSubmit={handleSubmit} onSwitch={() => setStep("login")} />
              </motion.div>
            )}
            {step === "forgot" && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ForgotStep onSubmit={handleSubmit} onSwitch={() => setStep("login")} />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full cursor-pointer"
            onClick={handleGoogleLogin}
          >
            ورود با گوگل
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
