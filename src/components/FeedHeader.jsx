// components/FeedHeader.jsx
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function FeedHeader({ value, onChange }) {
  return (
    <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <Tabs value={value} onValueChange={(v) => onChange(v)} className="w-full">
        <TabsList className="w-full grid grid-cols-2 rounded-none h-12">
          <TabsTrigger value="foryou" className="rounded-none data-[state=active]:shadow-none">
            For you
          </TabsTrigger>
          <TabsTrigger value="following" className="rounded-none data-[state=active]:shadow-none">
            Following
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
