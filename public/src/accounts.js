const { findAuthorById } = require("./books");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const lastA = a.name.last.toLowerCase();
    const lastB = b.name.last.toLowerCase();

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
  });
}

function getTotalNumberOfBorrows(account, books) {
  let borrowCount = 0;

  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        borrowCount++;
      }
    });
  });

  return borrowCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];

  books.forEach((book) => {
    const currentBorrow = book.borrows.find((borrow) => borrow.returned === false);

    if (currentBorrow && currentBorrow.id === account.id) {
      const author = findAuthorById(authors, book.authorId);

      result.push({
        ...book,
        author,
      });
    }
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
