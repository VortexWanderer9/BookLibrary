import React from 'react'

function Favorite() {
  return (
    <div className='h-full'>
        <h2 className='text-4xl font-bold mb-5'>My Favorite Books: </h2>
        <p className='text-lg text-gray-700'>Here are some of my all-time favorite books that have left a lasting impression on me:</p>
        <ul className='list-disc list-inside mt-4 text-lg text-gray-700'>
            <li><strong>"Crime and Punishment"</strong> by Fyodor Dostoevsky - A psychological novel that delves into the depths of human nature and morality.</li>
            <li><strong>"White Night"</strong> by Fyodor Dostoevsky - A novel that explores the complexities of love and sacrifice in 19th-century Russia.</li>
            <li><strong>"The Trial"</strong> by Franz Kafka - A surreal narrative that explores themes of alienation and the absurdity of existence.</li>
            <li><strong>"Man's search for meaning"</strong> by Viktor Frankl - A profound exploration of human resilience and the search for purpose in the face of suffering.</li>
            <li><strong>"The Metamorphosis"</strong> by Franz Kafka - A surreal narrative that explores themes of alienation and the absurdity of existence.</li>
        </ul>
    </div>
  )
}

export default Favorite