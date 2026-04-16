const findAuthorById = (authors, id) => authors.find((author) => author.id === id);

const findBookById = (books, id) => books.find((book) => book.id === id);

const partitionBooksByBorrowedStatus = (books) => {
  const borrowedBooks = [];
  const returnedBooks = [];

  books.forEach((book) => {
    if (book.borrows[0].returned) {
      returnedBooks.push(book);
    } else {
      borrowedBooks.push(book);
    }
  });

  return [borrowedBooks, returnedBooks];
};

const getBorrowersForBook = (book, accounts) => {
  return book.borrows.slice(0, 10).map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    return { ...account, returned: borrow.returned };
  });
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
