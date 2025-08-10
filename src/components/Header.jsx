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

      {/* Center: Search */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md">
          <Input
            placeholder="Search X"
            className="w-full rounded-full bg-gray-100 focus:bg-white focus:border-black transition-colors"
          />
        </div>
      </div>

      {/* Right: Avatar */}
      <div className="flex items-center justify-end w-1/3">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
            alt="User Avatar"
          />
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
