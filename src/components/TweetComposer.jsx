import React from 'react'
import { useState } from 'react'
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const TweetComposer = () => {
  const [content, setContent] = useState('')

  return (
    <div className="border-b p-4">
      <div className="flex space-x-3">
        {/* User avatar using shadcn */}
        <Avatar className="w-12 h-12">
          
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        
        {/* Composer area */}
        <div className="flex-1">
          <Textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="min-h-[120px] text-xl resize-none border-none shadow-none focus-visible:ring-0 placeholder:text-gray-500"
            maxLength={280}
          />
          
          {/* Bottom section */}
          <div className="flex justify-between items-center mt-3 pt-3 border-t">
            <span className={`text-sm ${content.length > 250 ? 'text-red-500' : 'text-gray-500'}`}>
              {280 - content.length}
            </span>
            <Button 
              disabled={!content.trim() || content.length > 280}
              className="bg-blue-500 hover:bg-blue-600 rounded-full px-6"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetComposer