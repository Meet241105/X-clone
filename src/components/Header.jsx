import React from 'react'
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header>
      <h1>X-Clone</h1>

      <Input placeholder='Search' />
      <div>Profile Area</div>
    </header>
  )
}

export default Header