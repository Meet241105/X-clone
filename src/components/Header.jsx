import React from 'react'
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-3 border-b border-gray-200 bg-white sticky top-0 z-50">
      <h1 className="font-bold text-2xl text-[#1da1f2] m-0">X</h1>
      <div className="flex-1 max-w-md mx-8">
        <Input placeholder="Search X" className="w-full" />
      </div>
      <div className="flex items-center gap-4">
        {/* Replace with actual profile/avatar */}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-500">
          U
        </div>
      </div>
    </header>
  )
}

export default Header