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
let a1 = "J.R.R. Tolkien";
let t1 = "The Hobbit";
let p1 = "295";
let r1 = false;
// Book object 2
let a2 = "Cixin Liu";
let t2 = "The 3 Body Problem";
let p2 = "408";
let r2 = true;

// Variables
let readStatus = ""
let firstLoad = true;

const newBookBtn = document.getElementById("new-book-btn");
const addBookInfoBtn = document.getElementById("add-book-info-btn");
const booksSection = document.getElementById("books-section");
const modalClose = document.getElementById("modal-close");
const modalForm = document.getElementById("modal-form");

/**
 * MAIN DOM MANIPULATION
 */

//  Initial books
myLibrary.push(new Book(t1, a1, p1, r1));
myLibrary.push(new Book(t2, a2, p2, r2));
createBookCards();
// Interactive events
newBookBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

/**
 * FUNCTIONS
 */

// Add new book info to the list
function saveInfoBook(event) {
  // Prevent reload the page when submiting
  event.preventDefault();
  // Hide Modal
  closeModal();
  // Append new book info
  myLibrary.push(new Book(
    event.target.elements.title.value,
    event.target.elements.author.value,
    event.target.elements.pages.value,
    event.target.elements.read.checked
  ));
  // Create new card with the new info
  createBookCards();
}

// Create the book cards
function createBookCards() {
  booksSection.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    // Read status options
    if (myLibrary[i].read) {
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