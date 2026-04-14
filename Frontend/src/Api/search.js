export const searchGoogleBooks = async (query) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`
  );
  const data = await res.json();

  return data.items.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors?.[0],
    cover: book.volumeInfo.imageLinks?.thumbnail,
  }));
};