import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import TweetComposer from './TweetComposer';
import { Button  } from './ui/button';

function Dashboard() {
  return (
    <>
    
    <Header />
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6">
          {/* Sidebar */}

          <aside className="md:col-span-1 border-r p-4">
            <Sidebar>
              <p>Extra content passed as children!</p>
              <Button className="mt-2 w-full">Tweet</Button>
            </Sidebar>
          </aside>

          {/* Feed */}
          <main className="md:col-span-4 border-x p-4">
            {/* <Feed /> */}
            <TweetComposer />
          </main>

          <aside className="hidden md:block md:col-span-1 p-4">
            <p className="text-sm text-gray-500">Right Column Placeholder</p>
          </aside>
        </div>
      </div>
</>
  )
}

export default Dashboard