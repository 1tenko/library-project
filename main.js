const cards = document.querySelector('.cards')

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

addBookToLibrary('Breaking the Habit of Being Yourself', 'Dr. Joe Dispenza', 368, true);
addBookToLibrary('Deep Work', 'Cal Newport', 304, true)
addBookToLibrary('Beyond Order', 'Jordan B. Peterson', 432, false)

myLibrary.forEach(book => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.textContent = book.info();
    cards.insertAdjacentElement("afterbegin", div);
})