function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = [];
  const returned = [];

  books.forEach((book) => {
    const latestBorrow = book.borrows[0];
    if (latestBorrow && latestBorrow.returned === false) borrowed.push(book);
    else returned.push(book);
  });

  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.slice(0, 10).map((borrow) => {
    const account = accounts.find((acc) => acc.id === borrow.id);
    return { ...account, returned: borrow.returned };
  });
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
