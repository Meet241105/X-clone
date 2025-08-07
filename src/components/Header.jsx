import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import XLogo from "@/components/icons/XLogo";


const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-3 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center">
        <XLogo className="w-8 h-8 text-black" />
      </div>

      <div className="flex-1 max-w-md mx-8">
        <Input placeholder="Search X" className="w-full" />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
              alt="User Avatar"
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
