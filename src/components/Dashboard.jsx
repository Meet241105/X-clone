import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import RightSidebar from "./RightSidebar";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main layout */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed (centered & limited width) */}
        <main className="flex-1 flex justify-center overflow-y-auto border-r border-gray-200 dark:border-gray-800">
          <div className="w-full max-w-[600px] min-h-full">
            <Feed />
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
