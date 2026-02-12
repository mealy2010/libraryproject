function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const lastA = a.name.last.toLowerCase();
    const lastB = b.name.last.toLowerCase();
    return lastA.localeCompare(lastB);
  });
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const timesBorrowedByAccount = book.borrows.filter(
      (borrow) => borrow.id === account.id
    ).length;
    return total + timesBorrowedByAccount;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter((book) => {
    const latestBorrow = book.borrows[0];
    return latestBorrow && latestBorrow.id === account.id && latestBorrow.returned === false;
  });

  return checkedOutBooks.map((book) => {
    const author = authors.find((a) => a.id === book.authorId);
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
