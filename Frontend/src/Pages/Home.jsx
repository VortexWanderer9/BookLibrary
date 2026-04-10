import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='absolute w-full'>
     <Navbar/>
   <div>
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Manage Your time <span className="text-blue-600">Organize eLibrary</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore thousands of books, save your favorites, and keep track of what you want to read next — all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition">
            Browse Books
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-2xl hover:bg-gray-200 transition">
            View Favorites
          </button>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <div className="w-40 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
   </div>
   <div>
   <Category />
   <Footer />
</div>
  </div>
  )
}

export default Home