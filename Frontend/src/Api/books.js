const BASE_URL = "https://openlibrary.org";

// 🔹 Format data (important!)
const formatBook = (book) => ({
  id: book.key || book.cover_edition_key,
  title: book.title,
  author: book.authors?.[0]?.name || book.author_name?.[0] || "Unknown",
  cover:
    book.cover_id || book.cover_i
      ? `https://covers.openlibrary.org/b/id/${
          book.cover_id || book.cover_i
        }-M.jpg`
      : "https://via.placeholder.com/150",
});

// 🔥 1. Get Popular / Trending Books
export const getPopularBooks = async () => {
  try {
    const res = await fetch(`${BASE_URL}/subjects/popular.json?limit=20`);

    const data = await res.json();

    return data.works.map(formatBook);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// 🔥 2. Get Books by Category
export const getBooksByCategory = async (category) => {
  try {
    const res = await fetch(
      `${BASE_URL}/subjects/${category.toLowerCase()}.json?limit=20`,
    );

    const data = await res.json();

    return data.works.map(formatBook);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// 🔥 3. Search Books
export const searchBooks = async (query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=20`,
    );

    const data = await res.json();

    return data.docs.map(formatBook);
  } catch (err) {
    console.error(err);
    return [];
  }
};
