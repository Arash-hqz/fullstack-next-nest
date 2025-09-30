"use client";
import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "../../shared/searchBar";

import { Navbar } from "./Navbar";
import { HamMenu } from "./hamMenu";
import { User } from "lucide-react"; // آیکون پروفایل
import { IMAGES } from "@/lib/images";

export function Header() {
  return (
    <header
      dir="ltr"
      className="bg-[#d1d1d1] shadow-md shadow-red-800 sticky top-0 z-50 h-[85px]"
    >
      <div className="relative mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="relative right-[-36px] max-sm:right-1 w-16">
          <Image src={IMAGES.logo} alt="Company Logo" width={120} height={40} />
        </Link>

        {/* Navigation */}
        <Navbar />

        {/* Search / Profile */}
        <div
          dir="rtl"
          className="flex items-center gap-3 w-[20%] relative right-[36px] max-xl:right-2 "
        >
          {/* دکمه همبرگر برای موبایل */}
          <HamMenu />

          {/* پروفایل */}
          <Link
            href="/auth"
            className="text-gray-600 hover:text-red-600 transition-colors duration-200 max-sm:relative left-6 "
          >
            <User className="w-6 h-6" />
          </Link>

          {/* سرچ */}
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
