// Book collection list
let myLibrary = []

// Book Object Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // yes | no
}

// Book object 1
let author = "J.R.R. Tolkien";
let title = "The Hobbit";
let pages = "295";
let read = "no";
// Book object 2
let author2 = "Cixin Liu";
let title2 = "The 3 Body Problem";
let pages2 = "408";
let read2 = "yes";

// Variables
let readStatus = ""

const newBookBtn = document.getElementById("new-book-btn");
const addBookInfoBtn = document.getElementById("add-book-info-btn");
const booksSection = document.getElementById("books-section");
const modalClose = document.getElementById("modal-close");
const modalForm = document.getElementById("modal-form");

/**
 * MAIN DOM MANIPULATION
 */

//  Initial books
addBookToLibrary();
getBooksFromLibrary();
createBookCards();

newBookBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

/**
 * FUNCTIONS
 */

// Append the info books
function addBookToLibrary() {
  myLibrary.push(new Book(title, author, pages, read));
  myLibrary.push(new Book(title2, author2, pages2, read2));
  console.log(myLibrary);
}
// Query the list of books
function getBooksFromLibrary() {
  myLibrary.forEach(printBookInfo);
}
// Print object elements
function printBookInfo(book) {
  console.log(`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, read: ${book.read}`);
}
// Create the book cards
function createBookCards() {
  booksSection.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    // Read status options
    if (myLibrary[i].read === "yes") {
      readStatus = `<button type="button" class="button is-success">Read</button>`
    }
    else {
      readStatus = `<button type="button" class="button is-danger">
      Not Read</button>`
    }
    // Book Card HTML
    booksSection.innerHTML += `<div class="box">
                                <div class="card">
                                    <div class="card-content">
                                        <p class="title">
                                            ${myLibrary[i].title}
                                        </p>
                                        <p class="subtitle">
                                            ${myLibrary[i].author}
                                        </p>
                                        <p class="subtitle is-6">
                                            Pages: ${myLibrary[i].pages}
                                        </p>
                                        ${readStatus}
                                    </div>
                                    <footer class="card-footer">
                                        <a href="#" class="card-footer-item">Edit</a>
                                        <a href="#" class="card-footer-item has-background-danger has-text-light">Delete</a>
                                    </footer>
                                </div>
                            </div>`
  }
}

// Functions to open and close a modal
function openModal() {
  modalForm.classList.add('is-active');
}
function closeModal() {
  modalForm.classList.remove('is-active');
}