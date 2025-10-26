import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import XLogo from "@/components/icons/XLogo";

const Header = () => {
  return (
    <header className="flex items-center border-b border-gray-200 bg-white sticky top-0 z-50 px-4 py-3">
      {/* Left: Logo */}
      <div className="flex items-center w-1/3">
        <XLogo className="w-8 h-8 text-black" />
      </div>


    </header>
  );
};

export default Header;
