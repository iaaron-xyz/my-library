// Book collection list
let myLibrary = []

// Book Object Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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

const boxCards = document.getElementsByClassName("box-card");
const readStatusBtn = document.getElementsByClassName("read-status-btn");
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
      readStatus = `<button type="button" onclick="toggleReadStatus(event)" class="button is-success read-status-btn" id=${i}>Read</button>`;
    }
    else {
      readStatus = `<button type="button" onclick="toggleReadStatus(event)" class="button read-status-btn" id="${i}">
      Not Read</button>`;
    }
    // Book Card HTML
    booksSection.innerHTML += `<div class="box box-card" id="${i}">
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
                                        <button type="button" onclick="deleteBookCard(event)" class="card-footer-item has-background-danger has-text-light" id="${i}">Delete</button>
                                    </footer>
                                </div>
                            </div>`
  }
}

// Remove an specific book card when delete button clicked
function deleteBookCard(e) {
  // Remove from the list the index that match the id value
  myLibrary.splice(e.target.id, 1);
  // Re-create the book cards with the new list
  createBookCards();
}

// Toggle read status when read/not-read clicked
function toggleReadStatus(e) {
  // toggle class is-success
  e.target.classList.toggle("is-success");
  // Change button content and the list object
  if (Array.from(e.target.classList).includes("is-success")) {
    e.target.innerHTML = "Read";
    myLibrary[e.target.id].read = true;
  }
  else {
    e.target.innerHTML = "Not read";
    myLibrary[e.target.id].read = false;
  }
  console.log(myLibrary[e.target.id])
}

// Functions to open and close a modal
function openModal() {
  modalForm.classList.add('is-active');
}
function closeModal() {
  modalForm.classList.remove('is-active');
}