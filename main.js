let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        function bookRead() {
            if (read === true) {
                return 'read.';
            }
            else return 'not yet read.'
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${bookRead()}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read)) ;
}

addBookToLibrary('Narnia', 'John Smith', 245, true);
addBookToLibrary('Space Odyssey', 'Daniel Goodman', 360, false)

console.log(myLibrary[1].info())