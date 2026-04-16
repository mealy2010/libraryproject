const getTotalBooksCount = (books) => books.length;

const getTotalAccountsCount = (accounts) => accounts.length;

const getBooksBorrowedCount = (books) => {
  return books.filter((book) => !book.borrows[0].returned).length;
};

const getMostCommonGenres = (books) => {
  const genreCounts = [];

  books.forEach((book) => {
    const existingGenre = genreCounts.find(
      (genre) => genre.name === book.genre
    );

    if (existingGenre) {
      existingGenre.count++;
    } else {
      genreCounts.push({ name: book.genre, count: 1 });
    }
  });

  return genreCounts
    .sort((genreA, genreB) => genreB.count - genreA.count)
    .slice(0, 5);
};

const getMostPopularBooks = (books) => {
  return books
    .map((book) => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);
};

const getMostPopularAuthors = (books, authors) => {
  const authorPopularity = authors.map((author) => {
    const booksByAuthor = books.filter((book) => book.authorId === author.id);

    const borrowTotal = booksByAuthor.reduce((totalBorrows, book) => {
      return totalBorrows + book.borrows.length;
    }, 0);

    return {
      name: `${author.name.first} ${author.name.last}`,
      count: borrowTotal,
    };
  });

  return authorPopularity
    .sort((authorA, authorB) => authorB.count - authorA.count)
    .slice(0, 5);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
