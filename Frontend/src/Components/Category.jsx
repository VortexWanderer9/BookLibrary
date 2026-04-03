import React from 'react'
import { useState } from 'react'


function Category() {
const [selectedCategory, setSelectedCategory] = useState('Fantasy');

  return (
   <div className='p-5 w-full bg-[#020617] relative text-gray-300'>
   <div className='flex items-center gap-2 justify-center'>
     <div>
      <h2 className='text-xl font-bold'>Categories :</h2>
    </div>
    <div className='flex items-center gap-4 text-lg font-serif'>
      <div onClick={() => setSelectedCategory('Fantasy')} className='cursor-pointer'>
        <div className={selectedCategory === 'Fantasy' ? 'text-blue-400' : 'hover:text-blue-400'}>Fantasy</div>
      </div>
      <div onClick={() => setSelectedCategory('Romance')} className='cursor-pointer'>
        <div className={selectedCategory === 'Romance' ? 'text-blue-400' : 'hover:text-blue-400'}   >Romance</div>
      </div>
      <div onClick={() => setSelectedCategory('Science')} className='cursor-pointer'>
        <div className={selectedCategory === 'Science' ? 'text-blue-400' : 'hover:text-blue-400'}>Science</div>
      </div>
      <div onClick={() => setSelectedCategory('History')} className='cursor-pointer'>
        <div className={selectedCategory === 'History' ? 'text-blue-400' : 'hover:text-blue-400'}>History</div>
      </div>
    </div>
   </div>

   </div>
  )
}

export default Category