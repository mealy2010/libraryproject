# 📚 Local Library Project

## 📖 Project Overview

The Local Library project simulates a neighborhood library system where users can borrow and return books. The goal of this project is to build JavaScript algorithms that process large datasets and provide meaningful insights such as book availability, borrowing trends, and account activity.

This project focuses entirely on logic and data manipulation rather than UI design. The main objective is to analyze arrays of books, authors, and accounts using modern JavaScript methods.

---

## 🎯 Learning Objectives

This project demonstrates proficiency in:

* Working with large datasets
* Using array methods such as `find()`, `filter()`, `map()`, and `sort()`
* Writing clean and readable JavaScript code
* Debugging using test feedback
* Applying modern JavaScript features like:

  * Arrow functions
  * Destructuring
  * Spread operator
  * Ternary operators

---

## 🧠 Project Plan

### Functions and Features

The application is built using helper functions grouped into three main categories:

* **Accounts**

  * Calculate total borrows per account
  * Identify books currently checked out by an account

* **Books**

  * Find books and authors by ID
  * Determine borrowing status of books
  * List borrowers for a specific book

* **Home (Dashboard)**

  * Count total books and accounts
  * Identify currently borrowed books
  * Determine most popular genres, books, and authors

---

## ⚙️ Implementation Plan

1. Reviewed the dataset structure for books, authors, and accounts
2. Identified expected outputs for each function
3. Implemented simpler counting functions first
4. Built more complex functions using combinations of:

   * `filter()` for grouping data
   * `find()` for locating specific items
   * `map()` for transforming data
   * `sort()` for ranking results
5. Tested each function incrementally using Qualified
6. Refactored code to improve readability and meet rubric requirements

---

## 🧭 Navigation Structure Example

An ideal navigation structure for a library dashboard would include:

* **Dashboard** – Overview of library statistics
* **Books** – List of all books and their availability
* **Accounts** – User borrowing activity
* **Authors** – Popular authors and statistics

This structure allows users to easily navigate between high-level insights and detailed records.

---

## ⚖️ Trade-offs and Decisions

One key trade-off was choosing between concise code and readable code. While chaining multiple array methods can reduce lines of code, I prioritized readability by breaking logic into clear steps. This makes debugging easier and improves long-term maintainability.

---

## 🐞 Challenges and Debugging

The main challenge was working with nested data structures, especially when combining information from books, authors, and accounts. Determining when to use `find()` versus `filter()` also required careful consideration.

I resolved these challenges by:

* Testing functions individually
* Logging intermediate values when needed
* Carefully comparing outputs with expected test results

---

## 🤖 AI Tools Used

* ChatGPT was used for:

  * Brainstorming project structure
  * Debugging logic errors
  * Improving code readability
  * Assisting with README documentation

### Justification

AI was used as a support tool, not a replacement for understanding. All suggestions were reviewed, tested, and validated before being implemented.

---

## 📝 Project Summary

This project focused on building JavaScript algorithms to power a local library system. By working with large datasets, I developed functions that analyze borrowing patterns, track book availability, and identify popular books and authors. I strengthened my understanding of array methods such as `find()`, `filter()`, `map()`, and `sort()`, while also improving my debugging skills through test-driven development. One of the biggest takeaways was learning how to manage and manipulate nested data structures efficiently. Overall, this project helped build confidence in writing clean, maintainable JavaScript code for real-world applications.

---

## 📂 Project Structure

```
public/
└── src/
    ├── accounts.js
    ├── books.js
    └── home.js
```

---

## 🚀 Getting Started

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Navigate into the project folder:

```
cd local-library
```

3. Run tests (if applicable):

```
npm test
```

---

## ✅ Requirements Met

* All Qualified tests passing
* No single-letter variable names used
* Use of arrow functions
* Use of `find()` and `filter()`
* Use of modern JavaScript features (spread, destructuring, ternary)
* Clean and readable code structure

---

## 📸 Submission Notes

This submission includes:

* GitHub repository with full code
* Commit history showing progress
* Screenshots of test results (if required)

---
