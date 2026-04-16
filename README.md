# Local Library Dashboard

A JavaScript project that builds the core algorithms for a local library dashboard. The application processes data about books, authors, and accounts to show availability, borrowing statistics, and other useful library insights.

## Live Purpose of the Project

This project simulates the logic needed for a neighborhood lending library. The main goal is to work with large datasets and build functions that answer questions such as:

- How many books are in the library?
- How many books are currently checked out?
- Which genres are most common?
- Which books are most popular?
- Which authors are most popular?
- Which books are currently checked out by a specific account?

This project focuses on JavaScript logic and data manipulation rather than visual design.

## Learning Objectives

This project demonstrates the ability to:

- Work with large arrays of objects
- Use JavaScript array methods like `find()`, `filter()`, `map()`, `sort()`, and `reduce()`
- Solve problems using nested data structures
- Write clean, readable, and testable code
- Debug using test results and error messages
- Use modern JavaScript syntax appropriately

## Project Plan

The project is divided into three main logic files:

### `home.js`
This file contains dashboard-style summary functions. These functions return totals and top-five lists for the library.

Planned features:
- Count total books
- Count total accounts
- Count books currently borrowed
- Return the most common genres
- Return the most popular books
- Return the most popular authors

### `books.js`
This file contains functions related to books and borrowing records.

Planned features:
- Find a book by its ID
- Find an author by ID
- Separate borrowed books from returned books
- Return borrower details for a specific book

### `accounts.js`
This file contains functions related to library users.

Planned features:
- Count total number of borrows for an account
- Return all books currently checked out by an account, including author details

## Implementation Plan

My implementation process was:

1. Review the data structure for books, accounts, authors, and borrows.
2. Identify what each function receives as input and what it must return.
3. Start with the simplest counting functions first.
4. Build more advanced functions using array methods.
5. Use `find()` when only one matching result is needed.
6. Use `filter()` when multiple matches are needed.
7. Use `map()` to reshape data into the format expected by the tests.
8. Use `sort()` and `slice()` to create ranked top-five lists.
9. Test each function and revise logic based on failures or incorrect output.
10. Refactor variable names and syntax to keep the code readable and rubric-friendly.

## Example Navigation Structure

Although this project does not require major HTML or CSS changes, an acceptable navigation structure for a full library dashboard would be:

- **Dashboard**: overview of total books, total accounts, and borrowed books
- **Books**: list of all books and whether they are available
- **Accounts**: borrower activity and currently checked-out books
- **Authors**: author popularity and book counts

This structure would make it easy for users to move between summary data and detailed records.

## Key JavaScript Features Used

This project includes the following rubric-required features:

- Arrow functions
- `find()`
- `filter()`
- Descriptive variable names
- Spread operator
- Template literals
- Ternary-style conditional logic where appropriate
- Array methods for sorting and transforming data

## Trade-Offs and Coding Decisions

One trade-off in this project was deciding between shorter code and more readable code. In several places, I could have written very compact chained array methods, but I chose slightly more explicit logic so the code would be easier to understand and debug.

Another coding decision was to keep related functions in separate files by topic (`home.js`, `books.js`, and `accounts.js`). This makes the project more organized and easier to maintain.

## Challenges and Debugging Reflection

One of the biggest challenges was working with nested arrays and objects, especially the borrowing records inside each book. It was important to carefully inspect the structure of the data before deciding which array method to use.

Another challenge was making sure the top-five ranking functions returned results in the exact expected format. I handled this by breaking the problem into steps:
- collect the data
- transform it into objects with `name` and `count`
- sort in descending order
- return only the first five results

Using test feedback was helpful for catching logic mistakes and confirming output structure.

## AI Tools Used With Justification

AI tools used:
- ChatGPT

Justification:
I used ChatGPT to help brainstorm solutions, explain array method choices, improve code readability, and draft project documentation. I reviewed each suggestion carefully and only used code or wording that I understood and could explain myself. AI supported my learning process, but I still verified the logic and made final decisions independently.

## Project Process Summary

This project focused on building JavaScript functions that process library data and return meaningful results. I used array methods like `find()`, `filter()`, `map()`, `sort()`, and `reduce()` to solve problems involving books, authors, and accounts. I approached the project by starting with smaller counting functions and then moving into more complex ranking and lookup functions. One of the main lessons from this project was learning how to work with nested data structures while keeping the code readable and organized. I also strengthened my debugging skills by using test feedback to refine my logic and confirm the expected output.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mealy2010/libraryproject.git
