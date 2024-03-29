// Data Structures

  // book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

  // library constructor
function Library() {
  this.books = [];
  this.isInLibrary = function(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  };
 }

const library = new Library();

function addBook(book) {
  if (!library.isInLibrary(book)) {
    library.books.push(book);
  } 
}

function removeBook(title) {
    library.books = library.books.filter((book) => book.title !== title)
}

// User Interface
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const overlay = document.getElementById('overlay');
const addBookForm = document.getElementById('addBookForm');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

const booksGrid = document.getElementById('booksGrid');

function openAddBookModal() {
  addBookForm.reset();
  addBookModal.classList.add('active');
}

function closeAddBookModal() {
  addBookModal.classList.remove('active');
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const buttonGroup = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book-card');
  buttonGroup.classList.add('button-group');
  readBtn.classList.add('btn');
  removeBtn.classList.add('btn');
  // readBtn.onclick = toggleRead();
  removeBtn.onclick = removeBook();

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove';

  if (book.isRead) {
    readBtn.textContent = 'Read';
    readBtn.classList.add('btn-light-green');
  } else {
    readBtn.textContent = 'Not Read';
    readBtn.classList.add('btn-light-red');
  }

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  booksGrid.appendChild(bookCard);
}

addBookBtn.addEventListener("click", () => {
  openAddBookModal();
  overlay.classList.add('active');
})

overlay.addEventListener("click", () => {
  closeAddBookModal();
  overlay.classList.remove('active');
})

// Testing
let theHobbit = new Book("The Hobbit", "Tolkien", 295, true);
createBookCard(theHobbit);