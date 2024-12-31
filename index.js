const library = [];


function Book(title, author, pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
// book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
// book3 = new Book("1984", "George Orwell", 328, true);
// library.push(book1, book2, book3);

function addBookToLibrary(book) {
    library.push(book);
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}
function displayLibrary() {
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = "";
    library.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <button class="remove">X</button>
            <button class="toggle-read">Toggle Read</button>
        `;
        libraryContainer.appendChild(bookElement);
    });}


document.getElementById("library").addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        const bookIndex = Array.from(document.getElementsByClassName("book")).indexOf(event.target.parentElement);
        library.splice(bookIndex, 1);
        displayLibrary();
    }
});
document.getElementById("library").addEventListener("click", (event) => {
    if (event.target.classList.contains("toggle-read")) {
        const bookIndex = Array.from(document.getElementsByClassName("book")).indexOf(event.target.parentElement);
        library[bookIndex].toggleRead();
        displayLibrary();
    }
});

const addbutton = document.getElementById("addBook");
addbutton.addEventListener("click", () => {
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const pages = prompt("Enter the number of pages in the book:");
    const read = confirm("Have you read the book?");
    const book = new Book(title, author, pages);
    addBookToLibrary(book);
    displayLibrary();
});