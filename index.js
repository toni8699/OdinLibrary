
class Library {
    constructor(books = []) {
        this.books = books; 
    }

    count() {
        return this.books.length;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(book) {
        this.books = this.books.filter((b) => b !== book);
    }
    getBook(index) {
        return this.books[index];
    }
    display() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
}


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead() {
        this.read = !this.read;
        console.log('button clicked');
    }
}


function LibraryController(){
    const library = new Library();
    const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
    library.addBook(book);
    displayLibrary(library);
    const addButton = document.getElementById("addButton");
    const dialog = document.querySelector("dialog");
    addButton.addEventListener("click", () => {
        dialog.showModal();
    });
    const add = document.getElementById("add");
    add.addEventListener("click", addNewBook);
    function addNewBook(e){
        e.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("read").checked;
        const book = new Book(title, author, pages, read);
        library.addBook(book);
        displayLibrary(library);
        dialog.close();
    }
    const libraryContainer = document.getElementById("library");
    const libraryElement = document.getElementById("library");

    libraryElement.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove")) {
            handleRemoveBook(event);
        } else if (event.target.classList.contains("toggle-read")) {
            handleToggleRead(event);
        }
    });
    
    function handleRemoveBook(event) {
        const bookIndex = Array.from(document.getElementsByClassName("book")).indexOf(event.target.parentElement);
        library.removeBook(library.getBook(bookIndex));
        displayLibrary(library);
    }
    
    function handleToggleRead(event) {
        const bookIndex = Array.from(document.getElementsByClassName("book")).indexOf(event.target.parentElement);
        library.getBook(bookIndex).toggleRead();
        displayLibrary(library);
    }
    function cancel(){
        dialog.close();
    }
    const cancelbutton = document.getElementById("cancel");
    cancelbutton.addEventListener("click", cancel);
    
  
    
 
    
}
function displayLibrary(library){
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = "";
    library.books.forEach((book) => {
        const bookElement = createBook(book);
        libraryContainer.appendChild(bookElement);
    });
}



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

LibraryController();
// function addBookToLibrary(book) {
//     library.push(book);
// }

// function displayLibrary() {
//     const libraryContainer = document.getElementById("library");
//     libraryContainer.innerHTML = "";
//     library.forEach((book) => {
//         const bookElement = createBook(book);
//         libraryContainer.appendChild(bookElement);
//     });}

// function createBook(book){
//     const bookElement = document.createElement("div");
//     bookElement.classList.add("book");
//     bookElement.innerHTML = `
//         <h2>${book.title}</h2>
//         <p>Author: ${book.author}</p>
//         <p>Pages: ${book.pages}</p>
//         <p>Read: ${book.read ? "Yes" : "No"}</p>
//         <button class="remove">X</button>
//         <button class="toggle-read">Toggle Read</button>
//     `;
//     return bookElement;
// }

// document.getElementById("library").addEventListener("click", (event) => {
//     if (event.target.classList.contains("remove")) {
//         const bookIndex = Array.from(document.getElementsByClassName("book")).indexOf(event.target.parentElement);
//         library.splice(bookIndex, 1);
//         displayLibrary();
//     }
// });


// const diaglog = document.querySelector("dialog");
// const cancelbutton = document.getElementById("cancel");

// const addbutton = document.getElementById("addButton");
// addbutton.addEventListener("click", () => {
//     diaglog.showModal();
// });

// const add = document.getElementById("add");
// add.addEventListener("click", (event) => {
//     event.preventDefault();
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const pages = document.getElementById("pages").value;
//     const read = document.getElementById("read").checked;
//     const book = new Book(title, author, pages, read);
//     addBookToLibrary(book);
//     displayLibrary();
//     diaglog.close();
// });
// cancelbutton.addEventListener("click", () => {
//     diaglog.close();
// });