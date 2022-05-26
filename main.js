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


const cards = document.querySelector('.cards')

function createCard(book) {
    const div = document.createElement('div');
    const closeCard = document.createElement('div');

    div.classList.add('card');
    div.textContent = book.info();
    cards.insertAdjacentElement("afterbegin", div);

    closeCard.classList.add('closeCard');
    closeCard.textContent = '+';
    div.insertAdjacentElement("afterbegin", closeCard);

    closeCard.addEventListener('click', () => {
        div.remove();
    })
}

function displayBook() {
    myLibrary.forEach(book => createCard(book));
}

displayBook();


const fixedButton = document.querySelector('.fixed-button');
const bgModal = document.querySelector('.bg-modal');
const close = document.querySelector('.close');

fixedButton.addEventListener('click', () => {
    bgModal.style.display = 'flex';
});

close.addEventListener('click', () => {
    bgModal.style.display = 'none';
})



const form = document.querySelector('#submit')

form.addEventListener('submit', event => {
    event.preventDefault();
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    let newPages = document.querySelector('#pages').value;
    let newReadYes = document.querySelector('#yes').checked;
    console.log(newReadYes);
    addBookToLibrary(newTitle, newAuthor, newPages, newReadYes);
    cards.innerHTML = '';
    displayBook();
    bgModal.style.display = 'none';
    
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    
})