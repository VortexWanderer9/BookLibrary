import React from 'react'
import { useState } from 'react'
import BookCard from './BookCard';


function Category() {
const [selectedCategory, setSelectedCategory] = useState('Fantasy');

  return (
  <div className='p-5 w-full bg-[#020617] relative text-gray-300'>
  <div className='flex flex-col items-center gap-2 justify-center'>
    <div>
      <h2 className='text-xl font-bold'>Categories :</h2>
    </div>
    <div className='flex flex-wrap items-center gap-4 text-lg font-serif justify-center sm:justify-start'>
      <div onClick={() => setSelectedCategory('Fantasy')} className='cursor-pointer border-2 border-gray-500 rounded-lg px-3 py-1'>
        <div className={selectedCategory === 'Fantasy' ? 'text-blue-400' : 'hover:text-blue-400'}>Fantasy</div>
      </div>
      <div onClick={() => setSelectedCategory('Romance')} className='cursor-pointer border-2 border-gray-500 rounded-lg px-3 py-1'>
        <div className={selectedCategory === 'Romance' ? 'text-blue-400' : 'hover:text-blue-400'}>Romance</div>
      </div>
      <div onClick={() => setSelectedCategory('Science')} className='cursor-pointer border-2 border-gray-500 rounded-lg px-3 py-1'>
        <div className={selectedCategory === 'Science' ? 'text-blue-400' : 'hover:text-blue-400'}>Science</div>
      </div>
      <div onClick={() => setSelectedCategory('History')} className='cursor-pointer border-2 border-gray-500 rounded-lg px-3 py-1'>
        <div className={selectedCategory === 'History' ? 'text-blue-400' : 'hover:text-blue-400'}>History</div>
      </div>
    </div>
  </div>
  <BookCard category={selectedCategory} />
</div>
  )
}

export default Category