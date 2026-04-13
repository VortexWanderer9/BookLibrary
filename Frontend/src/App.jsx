import { Outlet } from 'react-router'
import './App.css'
import Category from './Components/Category'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'



const App = () => {
  return (
  <>
<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Sphere Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
  />
      <Navbar/>
  <div className='relative w-full h-full p-3'>
   <Outlet />
 </div>
</div>

     </>
  )
}
export default App
