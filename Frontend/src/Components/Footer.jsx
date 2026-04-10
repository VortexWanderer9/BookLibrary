import React from 'react'

function Footer() {
  return (
    <div className='mt-12'>
        <div className='rounded-t-lg bg-gray-800 mt-3 w-full'>
            <div className='flex flex-col items-center gap-2 justify-center py-4 text-gray-300'>    
                <div>
                    <h2 className='text-xl font-bold'>mBook</h2>
                </div>
                <div className='flex flex-wrap items-center gap-4 text-lg font-serif justify-center sm:justify-start'>
                    <div className='cursor-pointer hover:text-blue-400'>Books</div>
                    <div className='cursor-pointer hover:text-blue-400'>Favorite</div>
                    <div className='cursor-pointer hover:text-blue-400'>Next Book</div>
                </div>
                <div className='text-sm text-gray-500 mt-2'>
                    &copy; 2026 mBook. All rights reserved.
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer