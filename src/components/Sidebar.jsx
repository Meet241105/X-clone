import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Search,
  Bell,
  Mail,
  BookMarked,
  Users2,
  BadgeCheck,
  User,
  MoreHorizontal,
  Zap,
  Briefcase,
  Gem,
} from "lucide-react";
import XLogo from "@/components/icons/XLogo";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Explore" },
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Zap, label: "Grok" },
  { icon: BookMarked, label: "Bookmarks" },
  { icon: Users2, label: "Communities" },
  { icon: Gem, label: "Premium" },
  { icon: Briefcase, label: "Jobs" },
  { icon: BadgeCheck, label: "Verified Orgs" },
  { icon: User, label: "Profile" },
  { icon: MoreHorizontal, label: "More" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col h-screen w-[275px] px-2 border-r border-gray-200 dark:border-gray-800 sticky top-0">
      {/* Scrollable top section */}
      <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide">
        {/* X Logo */}
        <div className="p-3 hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-full w-fit cursor-pointer transition">
          <XLogo className="w-8 h-8 text-black dark:text-white" />
        </div>

        {/* Navigation Menu */}
        <nav className="mt-2 space-y-1">
          {navItems.map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex items-center gap-5 px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-full cursor-pointer transition"
            >
              <Icon className="w-7 h-7" />
              <span className="text-xl font-medium">{label}</span>
            </div>
          ))}
        </nav>

        {/* Post button */}
        <Button className="mt-3 w-[90%] mx-auto py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-lg font-bold hover:opacity-90">
          Post
        </Button>
      </div>

      {/* Fixed profile section at bottom */}
      <div className="sticky bottom-2">
        <div className="flex items-center justify-between w-[90%] mx-auto px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-900 transition cursor-pointer">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="" alt="User" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-sm">Meet Kanojiya</p>
              <p className="text-gray-500 text-xs">@meetkanojiya</p>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </aside>
  );
}
