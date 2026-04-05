import React from 'react'
import { useEffect } from 'react';

function BookCard({category}) {
    const [books, setBooks] = React.useState([]);
      useEffect(() =>{
        const FetchBooks = async () =>{
          try {
            const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=10`)
           const data = await response.json();
           setBooks(data.works);
          } catch (err) {
            console.error("Error fetching books:", err);
          }
        }
        FetchBooks();
      }, []);
  return (
    <div>
      <h3>{books.length} books</h3>
    </div>
  )
}

export default BookCard