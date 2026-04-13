import React from 'react'

function About() {
  return (
   <>
  <div className='h-full mt-10 relative'>
     <div className='flex flex-col md:flex-row justify-center gap-10 h-full'>
    <div>
        <h2 className='text-4xl font-bold text-purple-800 mb-5'>About This project.!.</h2>
        <p className='text-justify text-lg text-white'>I love reading books, but when it's time to choose one, i have to search and ask LLM for it, after that, i got an idea about this project which will help me organize my book collection and discover new titles based on my interests. </p>
        <p className='text-lime-600 text-center border rounded bg-amber-50 text-2xl font-bold mt-5'>Peace.!.</p>
    </div>
    <div>
        <h2 className='text-3xl font-bold text-cyan-800'>Enjoy learning..!..</h2>
    </div>
    <div>
        <p className='text-justify text-lg text-white'>This project is designed to help book lovers like myself organize their collections and discover new titles based on their interests.</p>
        <p className='text-justify text-lg text-white mt-5'>The project is built using React for the frontend, and it provides a user-friendly interface for managing books, creating categories, and keeping track of favorite reads.</p>
        <p className='text-justify text-lg text-white mt-5'>Whether you're an avid reader or just looking for a way to keep your book collection organized, this project aims to provide a simple and effective solution.</p>
    </div><div>
        <h2 className='text-3xl font-bold text-cyan-800'>Contact Me</h2>
        <p className='text-justify text-lg text-white mt-5'>If you have any questions, suggestions, or just want to say hi, feel free to reach out to me. I'm always open to feedback and would love to hear from fellow book enthusiasts!</p>
    </div>
   </div>
   <div>
   </div>   
  </div>
   </>
  )
}

export default About