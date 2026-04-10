import React from 'react'

function Favorite() {
  return (
    <div className='h-full relative'>
        <div className='mt-20 absolute'>
          <h2 className='font-bold text-4xl'>Why you are reading a books.</h2>
          <h2>Just make a note.</h2>
           <h2>I don't have time to build this feature.</h2>
           <p className='text-black text-center border rounded bg-emerald-400/80 text-2xl font-bold'>Peace.!.</p>
        </div>
        <div>
            <div className='h-50 border-4 absolute w-50 mt-60 rounded flex items-center justify-center p-2 hover:scale-90 duration-150 ease-in-out cursor-pointer'>
                <div className='border-2 h-[90%] absolute'></div>
                <div className='border-2 absolute w-[90%]'></div>
            </div>
        </div>

    </div>
  )
}

export default Favorite