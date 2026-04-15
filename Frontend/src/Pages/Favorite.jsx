import React from 'react'

function Favorite() {
  const books = [
    {
      title: "Crime and Punishment",
      img: "crime_.jpg",
      desc: "Rodion Raskolnikov plans to murder a pawnbroker to test his theory that some people are uniquely capable of such actions."
    },
    {
      title: "White Nights",
      img: "white-night.jpg",
      desc: "A dreamer falls in love with Nastenka over four nights in St. Petersburg, exploring themes of loneliness and imagination."
    },
    {
      title: "The Brothers Karamazov",
      img: "https://media-amazon.com",
      desc: "A passionate philosophical novel that enters deeply into questions of God, free will, and morality."
    },
    {
      title: "The Idiot",
      img: "https://media-amazon.com",
      desc: "Dostoevsky portrays a 'positively good man,' Prince Myshkin, whose innocence is tested by a corrupt society."
    },
    {
      title: "Notes from Underground",
      img: "https://media-amazon.com",
      desc: "A bitter, isolated narrator provides a scathing critique of utopianism and the nature of human suffering."
    },
    {
      title: "Demons",
      img: "https://media-amazon.com",
      desc: "A political masterpiece that explores the chaotic consequences of nihilism and revolution in a small town."
    },
    {
      title: "Anna Karenina",
      img: "https://media-amazon.com",
      desc: "Tolstoy’s epic tale of love, betrayal, and the complex social structures of 19th-century Russia."
    },
    {
      title: "The Gambler",
      img: "https://media-amazon.com",
      desc: "A short novel reflecting Dostoevsky's own addiction to gambling, following a young tutor at a German casino."
    },
    {
      title: "The Double",
      img: "https://media-amazon.com",
      desc: "A psychological thriller where a government clerk encounters a man who is his exact physical double."
    },
    {
      title: "Poor Folk",
      img: "https://media-amazon.com",
      desc: "Dostoevsky's debut novel, written in epistolary form, depicting the struggles of people living in poverty."
    }
  ];

  return (
    <div className='p-6 bg-white/10 rounded min-h-screen'>
        <h2 className='text-4xl font-bold mb-5'>My Favorite Books: </h2>
        <p className='text-lg text-gray-700'>Here are some of my all-time favorite books that have left a lasting impression on me:</p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6'>
        {books.map((book, index) => (
          <div key={index} className='flex gap-2 flex-col p-2 rounded bg-black'>
            <div className='flex h-100 justify-center'>
              <div className='h-full w-full'>
                <img 
                  src={book.img} 
                  alt={book.title} 
                  className='h-full w-full object-fill rounded'
                />
              </div>
            </div>
            <div>
              <h2 className='text-xl font-bold text-emerald-700 text-center'>{book.title}</h2>
            </div>
            <div className='flex-grow'>
              <p className='text-white font-light text-sm p-1'> 
                {book.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorite
