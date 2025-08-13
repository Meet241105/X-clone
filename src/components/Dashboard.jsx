import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed"; // contains FeedHeader + TweetComposer

function Dashboard() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <div className="mx-auto flex max-w-7xl">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[275px] border-r">
            <Sidebar />
          </aside>

          {/* Feed */}
          <main className="flex-1 min-w-0 border-r">
            <Feed />
          </main>

          {/* Right column */}
          <aside className="hidden xl:block w-[350px] p-4">
            <p className="text-sm text-gray-500">Right Column Placeholder</p>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
