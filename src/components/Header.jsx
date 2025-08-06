import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-3 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </svg>
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
