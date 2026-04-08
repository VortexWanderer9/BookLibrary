import React from 'react'
import { useEffect } from 'react';
import Loading from './Loading';

function BookCard({category}) {
    const [books, setBooks] = React.useState([]);
      useEffect(() =>{
        const FetchBooks = async () =>{
          try {
            const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=100`)
           const data = await response.json();
           setBooks(data.works);
           console.log(data.works);
           
          } catch (err) {
            console.error("Error fetching books:", err);
          }
        }
        FetchBooks();
      }, [category]);
  return (
  <>
   {books.length === 0 ? (
    <Loading type="grid" />
  ) : (
     <div>
      <h2 className='font-bold'>{category}</h2>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {books.map((book) => (
        <div key={book.key} className='bg-gray-700 shadow rounded-xl p-3 hover:shadow-lg transition'>
            <div className='h-70 w-full mb-2'>
              <img
              src={
                book.cover_id
                  ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                  : "No-Image-Placeholder.png"
              }
              alt={book.title}
              className="w-full h-full object-cover rounded"
            />
            </div>
           <div className='flex flex-col justify-between h-40'>
            <div className='font-bold text-sm'>{book.title}</div>
            <div className='text-sm text-gray-400'>Author: {book.authors && book.authors.length > 0 ? book.authors[0].name : "Unknown Author"}</div>
            <div className='text-xs text-gray-500'>Published: {book.first_publish_year || "Unknown"}</div>
            <div className='text-xs text-gray-500'>Edition count: {book.edition_count || "Unknown"}</div>
            <div className='text-xs text-blue-500 hover:underline cursor-pointer'>Add To List</div>
           </div>
        </div>
      ))}
    </div>
     </div>
  )}
  </> 
  )
}

export default BookCard