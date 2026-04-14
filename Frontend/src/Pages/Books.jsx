import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading'

function Books() {
  const [typing, setTyping] = useState(false)
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
    useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeout); // cleanup
  }, [query]);
  // API call
  useEffect(() => {
    if (!debouncedQuery) return;
   fetch(`https://openlibrary.org/search.json?q=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.docs);
        setTyping(false);
      })
      .catch((err) => {
        console.error('Error fetching search results:', err);
        setTyping(false);
      });
  }, [debouncedQuery]);
  return (
    <div className='relative'>
      <div>
        <div className='flex gap-3'>
          <input 
            type="text" 
            placeholder="Search books..." 
            className='border border-gray-600 rounded outline-none py-1 px-2 text-white font-bold bg-mist-500' 
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(query);
              
              setTyping(true);
            }}
            onBlur={() => setTyping(false)}
          />
          <button className='bg-green-600 py-1 text-white rounded  font-bold px-2 cursor-pointer hover:bg-green-800 
          duration-100 ease-in-out
          '>Search</button>
        </div>
        <div className='border-2 mt-3 border-emerald-900'></div>
        <h2 className='font-bold font-mono mt-3 text-3xl'>Results:</h2>
        <div>
         {typing ? <Loading type="card" /> : <p className='text-gray-400 mt-3'>No results found. Try searching for something else.</p>}
         {results.map((book) => (
           <div key={book.key} className='border border-gray-600 rounded p-2 mt-2'>
             <h3 className='font-bold text-lg'>{book.title}</h3>
             <p className='text-gray-400'>by {book.author_name?.join(', ')}</p>
           </div>
         ))}
        </div>
      </div>

    </div>
  )
}

export default Books