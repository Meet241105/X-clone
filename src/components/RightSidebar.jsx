import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RightSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-[350px] p-4 overflow-y-auto sticky top-0 h-screen space-y-4">
      {/* Search */}
      <div className="mt-42px]">
        <Input
          placeholder="Search X"
          className="w-full rounded-full bg-gray-100 dark:bg-neutral-900 focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-gray-700 transition-colors"
        />
      </div>

      {/* Subscribe to Premium */}
      <Card className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Subscribe to Premium</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <p>
            Subscribe to unlock new features and if eligible, receive a share of revenue.
          </p>
          <Button className="rounded-full bg-black text-white hover:bg-gray-800 w-fit px-5">
            Subscribe
          </Button>
        </CardContent>
      </Card>

      {/* Today’s News */}
      <Card className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Today’s News</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">
              BTS’s V Lands in LA as First K-Pop Star at Vogue World: Hollywood
            </p>
            <p className="text-gray-500 text-xs">22 hours ago · Entertainment · 311.7K posts</p>
          </div>
          <div>
            <p className="font-semibold">
              New Zealand Defeats England by Four Wickets in First ODI Despite Brook’s 90
            </p>
            <p className="text-gray-500 text-xs">5 hours ago · Sports · 4.2K posts</p>
          </div>
          <div>
            <p className="font-semibold">
              Manchester United Overcomes Brighton 4-2 to Claim Fourth in Premier League
            </p>
            <p className="text-gray-500 text-xs">18 hours ago · Sports · 238.8K posts</p>
          </div>
        </CardContent>
      </Card>

      {/* What's Happening */}
      <Card className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-lg font-bold">What’s happening</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500 text-xs">Trending in India</p>
            <p className="font-semibold">#TheGirlfriend</p>
            <p className="text-gray-500 text-xs">3,365 posts</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Events · Trending</p>
            <p className="font-semibold">GOAT PLAYER FARHANNA</p>
            <p className="text-gray-500 text-xs">52K posts</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Trending in India</p>
            <p className="font-semibold">#godnightsaturday</p>
            <p className="text-gray-500 text-xs">14.3K posts</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
