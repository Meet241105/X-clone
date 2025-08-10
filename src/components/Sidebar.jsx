import React from "react";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  BriefcaseBusiness,
  Users,
  Zap,
  User,
  CircleEllipsis,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import XLogo from "./icons/XLogo";
import Grok from "./icons/Grok"; // 

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Explore" },
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Grok, label: "Grok" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: BriefcaseBusiness, label: "Jobs" },
  { icon: Users, label: "Communities" },
  { icon: XLogo, label: "Premium" },
  { icon: Zap, label: "Verified Orgs" },
  { icon: User, label: "Profile" },
  { icon: CircleEllipsis, label: "More" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between min-h-screen px-4 py-6 w-72">
      {/* Top nav */}
      <div className="space-y-2">
        {navItems.map(({ icon: Icon, label }, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-4 px-4 py-2 rounded-full hover:bg-white hover:text-black w-full justify-start text-black transition-colors"
          >
            <Icon className="w-6 h-6" />
            <span className="text-lg font-medium">{label}</span>
          </Button>
        ))}

        {/* Post Button */}
        <Button className="mt-4 w-full py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors border border-black">
          Post
        </Button>
      </div>

      {/* Bottom user profile */}
      <div className="flex items-center gap-3 mt-8">
        <Avatar>
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <div className="text-sm font-semibold">Meet Kanojiya</div>
      </div>
    </aside>
  );
};

export default Sidebar;
