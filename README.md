# 📚 Local Library Project

## Overview

This project simulates a local library system where users can borrow and return books. The goal was to build the core JavaScript logic that powers a dashboard showing book availability, borrowing activity, and general library statistics.

The focus of this project is working with large datasets using JavaScript rather than designing the user interface. All functionality is built using arrays of books, authors, and accounts.

## What I Learned

Through this project, I strengthened my ability to:

* Work with large and nested datasets
* Use array methods such as `find()`, `filter()`, `map()`, `sort()`, and `reduce()`
* Write clean, readable, and testable code
* Debug issues using test results and error messages
* Apply modern JavaScript features like arrow functions, destructuring, and the spread operator

## Project Plan

I organized the project into three main sections based on the provided files:

### Home (Dashboard)

* Count total books and accounts
* Determine how many books are currently checked out
* Identify the most common genres
* Find the most popular books and authors

### Books

* Locate books and authors by ID
* Separate borrowed books from returned books
* Display borrower details for each book

### Accounts

* Calculate how many times an account has borrowed books
* Identify which books an account currently has checked out

## Implementation Approach

I followed a structured process to complete the project:

1. Reviewed the dataset structure for books, authors, and accounts.
2. Identified the expected input and output for each function.
3. Started with simpler functions such as counts and lookups.
4. Built more complex logic using:

   * `filter()` to group data
   * `find()` to locate specific items
   * `map()` to format results
   * `sort()` to rank data
5. Tested each function and refined logic based on results.
6. Cleaned up the code to improve readability and meet rubric requirements.

## Example Navigation Structure

If this project included a full UI, an effective navigation structure would include:

* **Dashboard** – overview of totals and key statistics
* **Books** – list of all books and their availability
* **Accounts** – user borrowing activity
* **Authors** – author popularity and statistics

This structure allows users to easily move between summary data and detailed records.

## Coding Decisions & Trade-offs

I chose to prioritize readability over writing extremely compact code. While some functions could be shortened using chained methods, I broke the logic into clear steps to make debugging and understanding easier.

I also kept functions separated into different files (`home.js`, `books.js`, and `accounts.js`) to maintain organization and improve maintainability.

## Challenges & Debugging

One of the biggest challenges was working with nested data, especially the borrowing history inside each book.

Another challenge was deciding when to use `find()` versus `filter()`:

* `find()` returns a single result
* `filter()` returns multiple results

To work through these challenges, I:

* tested functions individually
* used console logs to track values
* compared outputs carefully with expected results

## AI Tools Used

* ChatGPT
* YouTube
* Replit

### How I Used Them

I used ChatGPT to better understand JavaScript logic, debug issues, improve code readability, and help organize documentation.

YouTube was used as an educational resource to reinforce key concepts like array methods and to watch step-by-step examples of similar problems.

Replit was used as a development environment to test and run code in real time. It helped me quickly identify errors and understand how changes affected results.

All tools were used to support my learning. I reviewed and verified all solutions before including them in the final project.

## Project Summary

This project focused on building JavaScript functions that analyze and organize library data. I used array methods like `find()`, `filter()`, `map()`, and `sort()` to generate useful insights such as book availability, popular genres, and borrowing trends. One of the most important lessons was learning how to work with nested data structures while keeping the code clean and readable. I also improved my debugging skills by using test feedback to refine my logic. Overall, this project strengthened my confidence in working with real-world data in JavaScript.

## Project Structure
<img width="3024" height="4032" alt="real_replit2" src="https://github.com/user-attachments/assets/4c52c092-cd47-4244-be51-aebdc8f86a73" />
<img width="3024" height="4032" alt="real_replit1" src="https://github.com/user-attachments/assets/b29d28e1-1d03-4986-81e2-b8a32c082ee9" />
<img width="3024" height="4032" alt="real_replit3" src="https://github.com/user-attachments/assets/dd6b17fa-ef8b-42fd-8a18-d0aec2a6c8a6" />

```text
public/
└── src/
    ├── accounts.js
    ├── books.js
    └── home.js
```

## Development Evidence (Replit Screenshots)

These screenshots provide visual evidence of my development process while building and testing the project logic in Replit.

### Home.js Functions

![Home](https://github.com/mealy2010/libraryproject/blob/main/images/real_replit1.png?raw=true)

### Books.js Functions

![Books](https://github.com/mealy2010/libraryproject/blob/main/images/real_replit2.png?raw=true)

### Accounts.js Functions

![Accounts](https://github.com/mealy2010/libraryproject/blob/main/images/real_replit3.png?raw=true)

## How to Run

Clone the repository:

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

## Requirements Checklist

* All tests passing
* No single-letter variables used
* Use of arrow functions
* Use of `find()` and `filter()`
* Use of modern JavaScript features
* Clean, readable, and organized code

## Final Notes

This project helped reinforce key JavaScript concepts and improved my ability to work with structured data. It also strengthened my problem-solving and debugging skills, especially when dealing with nested objects and arrays.

