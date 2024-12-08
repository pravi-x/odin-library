const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(name, author, year) {
  // the constructor...
  this.name = name
  this.author = author
  this.year = year
}
Book.prototype.toString = function() {
  return `${this.name} by ${this.author} (${this.year})`;
};


myLibrary.push(new Book("1984", "George Orwell",1960))
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 1960))


function showBooks(){
  myLibrary.map(book => console.log(book.toString()));
}

function dispalyBooks(){
  showBooks()

  //display them in some sort of table, or each on their own “card”
  

}

function addBookToLibrary() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("bookYear").value;


  if (title && author && year){
  newBook = new Book(title, author, year)
    myLibrary.push(newBook);

    document.getElementById("bookForm").reset();
    showBooks();
  }

}
document.getElementById("bookForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
});


// Add event listener to the button
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("showBooksButton");
  button.addEventListener("click", () => showBooks(myLibrary));
});