// Categories
const categories = ["fantasy", "romance", "science", "history"];

// Random category
const randomCategory =
  categories[Math.floor(Math.random() * categories.length)];

// Fetch books
fetch(`https://openlibrary.org/subjects/${randomCategory}.json?limit=20`);

const formatBook = (book) => ({
  id: book.key,
  title: book.title,
  author: book.authors?.[0]?.name || "Unknown",
  cover: book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : "/no-image.png",
});
