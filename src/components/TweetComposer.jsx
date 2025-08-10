import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";

const TweetComposer = () => {
  const [content, setContent] = useState("");

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 p-4">
      <div className="flex space-x-3">
        {/* Avatar */}
        <Avatar className="w-12 h-12">
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>

        {/* Input area */}
        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full text-xl resize-none border-none shadow-none focus-visible:ring-0 placeholder:text-gray-500"
            maxLength={280}
          />

          {/* Footer: char count + post button */}
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
            <span
              className={`text-sm ${
                content.length > 250 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {280 - content.length}
            </span>
            <Button
              disabled={!content.trim() || content.length > 280}
              className="bg-sky-500 hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-6"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer;
