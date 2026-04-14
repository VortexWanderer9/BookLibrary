import { useEffect, useState } from 'react'
import {getPopularBooks} from '../Api/books.js'
import Loading from '../Components/Loading'
const BASE_URL = "https://openlibrary.org";
const searchApi = `https://www.googleapis.com/books/v1/volumes?q=`
import { useDebounce } from 'react-use'
// https://www.googleapis.com/books/v1/volumes?q=white+night
// https://openlibrary.org/search.json?q=harry+potter

function Books() {
  const [typing, setTyping] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
   const [debounceSearch, setDebounceSearch] = useState('');
  useDebounce(() => setDebounceSearch(searchTerm), 500, [searchTerm]);
  useEffect(() =>{
     fetchBooks(debounceSearch);
  }, [debounceSearch])
 
  const fetchBooks = async (searchTerm) => {
    setTyping(true);
    const endPoint = searchTerm ? 
    `${BASE_URL}/search.json?q=${encodeURIComponent(searchTerm)}&limit=20` :
    `${BASE_URL}/subjects/popular.json?limit=20`;
    try {
      const res = await fetch(endPoint);
      const data = await res.json();
      const booksData = searchTerm ? data.docs : data.works;
      setBooks(booksData);
    } catch (err) {
      console.error(err);
    } finally {
      setTyping(false);
    }
  }
console.log(books);

  return (
   <div className="relative max-w-6xl mx-auto px-4 py-6">
  
  {/* Search Bar */}
  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
    <input 
      type="text" 
      placeholder="Search books..." 
      className="flex-1 border border-gray-700 rounded-lg px-4 py-2 
      text-white bg-gray-900 placeholder-gray-400 
      focus:ring-2 focus:ring-emerald-500 focus:outline-none
      transition duration-200"
      onChange={(e) => {
        setSearchTerm(e.target.value);          
        setTyping(true);
      }}
      onBlur={() => setTyping(false)}
    />

    <button 
      className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold 
      hover:bg-emerald-700 active:scale-95 transition duration-150"
    >
      Search
    </button>
  </div>

  {/* Divider */}
  <div className="border-b border-gray-800 mt-6"></div>

  {/* Title */}
  <h2 className="font-bold mt-6 text-2xl sm:text-3xl text-white">
    Results
  </h2>

  {/* Content */}
  <div className="mt-4">
    {typing ? (
      <Loading type="card" />
    ) : books.length === 0 ? (
      <p className="text-gray-400 mt-3 text-sm sm:text-base">
        No results found. Try searching for something else.
      </p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        
        {books.map((book) => (
          <div 
            key={book.key} 
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 
            hover:shadow-lg hover:shadow-emerald-900/20 
            transition duration-200"
          >
            
            {/* Image */}
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img
                src={
                  book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                    : "/No-Image-Placeholder.png"
                }
                alt={book.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-200"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="font-semibold text-lg text-white line-clamp-2">
                {book.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {book.authors?.[0]?.name || "Unknown Author"}
              </p>
            </div>

          </div>
        ))}

      </div>
    )}
  </div>
</div>
  )
}

export default Books