    import React from 'react'
    import { useState } from 'react'
    import BookCard from './BookCard';
    import { useRef } from 'react';


    function Category() {
    const [selectedCategory, setSelectedCategory] = useState('Fantasy');
    const [limit, setLimit] = useState(10);
    const limitRef = useRef(12);
    function handleLimitChange() {
      const newLimit = parseInt(limitRef.current.value);
      if (!isNaN(newLimit) && newLimit > 0) {
        setLimit(newLimit);
      } else {
        alert("Please enter a valid positive number for the limit.");
      }
    }

      return (
      <div className='p-2 text-gray-300 rounded-b-4xl'>
      <div className='flex flex-col items-center gap-4 justify-center'>
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
      <div className='flex mt-4 gap-2'>
        <h2 className='text-purple-700 font-bold text-lg'>Limit:</h2>
        <input ref={limitRef} type="text" className='border-2 outline-none px-1 w-34' placeholder={limit} />
        <button className='cursor-pointer bg-blue-700 rounded px-2 hover:bg-blue-900 ease-in-out duration-150 font-bold' onClick={handleLimitChange}>Apply</button>
      </div>
      <div className='font-bold text-2xl text-cyan-600'>{limit}</div>
      <BookCard category={selectedCategory} limit={limit} />
    </div>
      )
    }

    export default Category