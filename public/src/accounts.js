const getTotalNumberOfBorrows = (account, books) => {
  return books.reduce((totalBorrows, book) => {
    const borrowCount = book.borrows.filter(
      (borrow) => borrow.id === account.id
    ).length;

    return totalBorrows + borrowCount;
  }, 0);
};

const getBooksPossessedByAccount = (account, books, authors) => {
  const checkedOutBooks = books.filter((book) => {
    const currentBorrow = book.borrows[0];
    return currentBorrow.id === account.id && !currentBorrow.returned;
  });

  return checkedOutBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
};

module.exports = {
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
