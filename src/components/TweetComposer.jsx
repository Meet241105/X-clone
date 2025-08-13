// components/TweetComposer.jsx
import React, { useRef, useState } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Image as ImageIcon,
  Smile,
  BarChartBig,
  CalendarClock,
  MapPin,
  FileVideo,
} from "lucide-react";

export default function TweetComposer({ onPost, placeholder = "What’s happening?", max = 280 }) {
  const [text, setText] = useState("");
  const taRef = useRef(null);

  const remaining = max - text.length;
  const over = remaining < 0;
  const canPost = text.trim().length > 0 && !over;

  const autoResize = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div className="flex gap-3 px-4 py-3 border-b">
      <div className="pt-1">
        <Avatar className="h-10 w-10">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1">
        <Textarea
          ref={taRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            autoResize();
          }}
          onInput={autoResize}
          placeholder={placeholder}
          className="resize-none border-0 focus-visible:ring-0 px-0 shadow-none text-base leading-6 min-h-[48px]"
        />

        <div className="mt-3">
          <Separator />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IconButton label="Media"><ImageIcon size={18} /></IconButton>
            <IconButton label="GIF"><FileVideo size={18} /></IconButton>
            <IconButton label="Poll"><BarChartBig size={18} /></IconButton>
            <IconButton label="Emoji"><Smile size={18} /></IconButton>
            <IconButton label="Schedule"><CalendarClock size={18} /></IconButton>
            <IconButton label="Location"><MapPin size={18} /></IconButton>
          </div>

          <div className="flex items-center gap-3">
            {text.length > 0 && (
              <span
                className={`text-xs tabular-nums ${
                  over ? "text-destructive" : remaining <= 20 ? "text-yellow-600 dark:text-yellow-500" : "text-muted-foreground"
                }`}
              >
                {remaining}
              </span>
            )}
            <Button
              onClick={() => {
                if (!canPost) return;
                onPost(text.trim());
                setText("");
                requestAnimationFrame(autoResize);
              }}
              disabled={!canPost}
              className="rounded-full"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="p-2 rounded-full hover:bg-muted transition"
    >
      {children}
    </button>
  );
}
