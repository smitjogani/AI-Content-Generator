import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-1 border rounded-md m-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md m-2 max-w-sm'>
        <Search/>
        <input type='text' placeholder='search' className='outline-none'/>
      </div>

      <div className='hover:bg-[#89d1d0] rounded-md p-2 cursor-pointer bg-[#d88095] text-white transition-all hover:text-black flex items-center justify-center'>
        <h3 className='text-[1vw]'>Join Membership</h3>
      </div>

    </div>
  )
}

export default Header