const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Dialog modal controls
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.read = false;
}

Book.prototype.toString = function() {
  return `${this.name} by ${this.author} (${this.year})`;
};

// Initial books
myLibrary.push(new Book("1984", "George Orwell", 1960));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 1960));

function showBooks() {
  myLibrary.map(book => console.log(book.toString()));
}

function showBooksButton() {
  // Clear existing cards
  const container = document.getElementById('booksContainer');
  container.innerHTML = '';

  // Create and display book cards
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    const title = document.createElement('h3');
    title.textContent = book.name;
    
    const details = document.createElement('div');
    details.className = 'book-details';
    details.innerHTML = `
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
    `;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
      const index = myLibrary.indexOf(book);
      if (index > -1) {
        myLibrary.splice(index, 1);
        showBooksButton(); // Refresh display
      }
    };

    const readBtn = document.createElement('button');
    readBtn.textContent = 'Read';
    readBtn.className = 'read-btn';
    readBtn.onclick = () => {
      book.read = true;
      alert('You read the book!');
      showBooksButton(); // Refresh display
    };
    
    card.appendChild(title);
    card.appendChild(details);
    card.appendChild(deleteBtn);
    card.appendChild(readBtn)
    container.appendChild(card);
  });
}

function addBookToLibrary() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("bookYear").value;

  if (title && author && year) {
    const newBook = new Book(title, author, year);
    myLibrary.push(newBook);
    document.getElementById("bookForm").reset();
    showBooksButton(); // Update the display immediately
    dialog.close(); // Close the modal after adding
  }
}

document.getElementById("bookForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});

// Add event listener to the button
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("showBooksButton");
  button.addEventListener("click", showBooksButton);
});