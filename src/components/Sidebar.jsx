import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Sidebar = ({ children }) => {
  return (
    <aside>

      <nav>
        <Button className="flex flex-col space-y-2">Home</Button>
        <Button className="flex flex-col space-y-2">Explore</Button>
        <Button className="flex flex-col space-y-2">Notifications</Button>
        <Button className="flex flex-col space-y-2" >Messages</Button>
      </nav>

      <div>
      <Avatar>
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <span>Meet Kanojiya</span>
      </div>

      <div>
        {children}
      </div>
    </aside>
  )
}

export default Sidebar

