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

const addBookBtn = document.getElementById("add-book-btn");
const modalForm = document.getElementById("modal-form");
const modalClose = document.getElementById("modal-close");

/**
 * MAIN DOM MANIPULATION
 */

//  Initial books
addBookToLibrary();
getBooksFromLibrary();

addBookBtn.addEventListener('click', openModal);
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

// Functions to open and close a modal
function openModal() {
  modalForm.classList.add('is-active');
}
function closeModal() {
  modalForm.classList.remove('is-active');
}