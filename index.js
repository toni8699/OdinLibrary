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
        const bookElement = createBook(book);
        libraryContainer.appendChild(bookElement);
    });}

function createBook(book){
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
    return bookElement;
}

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

const diaglog = document.querySelector("dialog");
const cancelbutton = document.getElementById("cancel");

const addbutton = document.getElementById("addButton");
addbutton.addEventListener("click", () => {
    diaglog.showModal();
});

const add = document.getElementById("add");
add.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayLibrary();
    diaglog.close();
});
cancelbutton.addEventListener("click", () => {
    diaglog.close();
});