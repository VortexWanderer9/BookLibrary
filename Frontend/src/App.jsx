import './App.css'
import Category from './Components/Category'
import Navbar from './Components/Navbar'




const App = () => {
  return (
  <>
<div className="min-h-screen w-full bg-[#020617] relative"> 
  {/* Magenta Orb Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
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
  </div>
</div>
<div>
   <Category />
</div>
     </>
  )
}
export default App
