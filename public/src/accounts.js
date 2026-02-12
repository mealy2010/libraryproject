function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase().localeCompare(b.name.last.toLowerCase())
  );
}

function getAccountFullNames(accounts) {
  return accounts.map((account) => `${account.name.first} ${account.name.last}`);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const count = book.borrows.filter((borrow) => borrow.id === account.id).length;
    return total + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOut = books.filter((book) => {
    const latest = book.borrows[0];
    return latest && latest.id === account.id && latest.returned === false;
  });

  return checkedOut.map((book) => {
    const author = authors.find((a) => a.id === book.authorId);
    return { ...book, author };
  });
}

/**
 * IMPORTANT:
 * Export each function explicitly to avoid “overwritten module.exports” issues.
 * (This is the most bulletproof way to satisfy the test import.)
 */
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
