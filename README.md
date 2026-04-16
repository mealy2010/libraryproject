# 📚 Local Library Project

## Overview

This project simulates a local library system where users can borrow and return books. The goal was to build the core JavaScript logic that powers a dashboard showing book availability, borrowing activity, and general library statistics.

The focus of this project is working with large datasets using JavaScript—not designing the UI. All functionality is built using arrays of books, authors, and accounts.

---

## What I Learned

Through this project, I strengthened my ability to:

* Work with large and nested datasets
* Use array methods like `find()`, `filter()`, `map()`, `sort()`, and `reduce()`
* Write clean, readable, and testable code
* Debug using test results and error messages
* Apply modern JavaScript features like arrow functions and destructuring

---

## Project Plan

I broke the project into three main parts based on the files provided:

### Home (Dashboard)

* Count total books and accounts
* Identify how many books are currently checked out
* Find the most common genres
* Determine the most popular books and authors

### Books

* Find books and authors by ID
* Separate borrowed vs returned books
* Show borrower details for each book

### Accounts

* Count how many times an account has borrowed books
* Show which books an account currently has checked out

---

## Implementation Approach

I followed a step-by-step process:

1. Reviewed the structure of the data (books, authors, accounts)
2. Identified the expected output for each function
3. Started with simpler functions (counts and basic lookups)
4. Built more complex logic using:

   * `filter()` for grouping data
   * `find()` for locating specific items
   * `map()` for formatting results
   * `sort()` for ranking
5. Tested each function and adjusted based on results
6. Refactored code to improve readability and meet rubric requirements

---

## Example Navigation Structure

If this project included a full UI, a good navigation setup would be:

* **Dashboard** – shows totals and summary stats
* **Books** – displays all books and their availability
* **Accounts** – shows user borrowing activity
* **Authors** – displays author popularity

This structure would make it easy for users to move between high-level stats and detailed information.

---

## Coding Decisions & Trade-offs

One decision I made was to prioritize readability over writing very compact code. While some functions could be written in fewer lines using chained methods, I chose to break logic into clearer steps so it would be easier to understand and debug.

I also kept functions separated by file (`home.js`, `books.js`, `accounts.js`) to keep the project organized and easier to maintain.

---

## Challenges & Debugging

The most challenging part was working with nested data, especially the borrowing records inside each book.

I also had to be careful when choosing between `find()` and `filter()`:

* `find()` returns one result
* `filter()` returns multiple results

To solve issues, I:

* tested functions one at a time
* used console logs when needed
* compared outputs directly with expected results

---

## AI Tools Used

* ChatGPT
* YouTube
* Replit

### How I Used Them

I used ChatGPT to help understand JavaScript logic, debug issues, improve code readability, and assist with organizing documentation.

I used YouTube as an educational resource to reinforce concepts like array methods (`find()`, `filter()`, `map()`, and `sort()`), and to watch step-by-step explanations of similar problems.

Replit was used as a development tool to test and experiment with code in real time. It helped me quickly run functions, identify errors, and understand how changes affected the output.

All tools were used to support my learning. I reviewed and verified all solutions before including them in the final project.

---

## Project Summary

This project focused on building JavaScript functions that analyze and organize library data. I used array methods like `find()`, `filter()`, `map()`, and `sort()` to create meaningful outputs such as book availability, popular genres, and borrowing trends. One of the biggest takeaways was learning how to work with nested data structures while keeping the code readable and organized. I also improved my debugging skills by using test results to refine my logic. Overall, this project helped strengthen my confidence in working with real-world data in JavaScript.

---

## Project Structure
<img width="3024" height="4032" alt="replit 2" src="https://github.com/user-attachments/assets/bfa5cd7b-9aac-4799-a96a-d05ba3b6026e" />
<img width="3024" height="4032" alt="replit3" src="https://github.com/user-attachments/assets/f7e3a2f7-de34-4d62-8ed4-a794093f2873" />
<img width="3024" height="4032" alt="replit" src="https://github.com/user-attachments/assets/699802eb-da25-4013-af21-961a2bfbcf2f" />

public/
└── src/
    ├── accounts.js
    ├── books.js
    └── home.js
```

---

## How to Run

Clone the repo:

```bash
git clone https://github.com/mealy2010/libraryproject.git
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

---

## Requirements Checklist

* All tests passing
* No single-letter variables
* Uses arrow functions
* Uses `find()` and `filter()`
* Uses modern JavaScript features
* Clean and readable code

---
