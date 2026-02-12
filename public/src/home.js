function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0] && book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  const counts = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => ({ name: book.title, count: book.borrows.length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorBorrowCounts = books.reduce((acc, book) => {
    acc[book.authorId] = (acc[book.authorId] || 0) + book.borrows.length;
    return acc;
  }, {});

  return authors
    .map((author) => ({
      name: `${author.name.first} ${author.name.last}`,
      count: authorBorrowCounts[author.id] || 0,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
