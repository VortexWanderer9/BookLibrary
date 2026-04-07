import React from 'react'
import { useEffect } from 'react';

function BookCard({category}) {
    const [books, setBooks] = React.useState([]);
      useEffect(() =>{
        const FetchBooks = async () =>{
          try {
            const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=20`)
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
    <div>
      <h2 className='font-bold'>{category}</h2>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {books.map((book) => (
        <div key={book.key}>
          {book.title}
        </div>
      ))}
    </div>
     </div>
  )
}

export default BookCard