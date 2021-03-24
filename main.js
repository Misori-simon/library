const myLibrary = [
  {
    author: 'Sam Smith',
    title: 'Javascript for Dummies',
    pages: 235,
    read: false,
  },
  {
    author: 'John Doe',
    title: 'Javascript, The Fundamentals',
    pages: 435,
    read: true,
  },
  {
    author: 'Isaac Asimov',
    title: 'Newtons Theory on Relativity',
    pages: 235,
    read: false,
  },
];

const displayBooks = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const body = document.getElementById('body');

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('wrapper');
    body.appendChild(cardWrapper);

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('title');
    const bookTitleText = document.createTextNode(arr[i].title);
    bookTitle.appendChild(bookTitleText);

    const bookAuthor = document.createElement('h3');
    bookAuthor.classList.add('author');
    const bookAuthorText = document.createTextNode(arr[i].author);
    bookAuthor.appendChild(bookAuthorText);

    const bookPages = document.createElement('p');
    bookPages.classList.add('pages');
    const bookPagesText = document.createTextNode(arr[i].pages);
    bookPages.appendChild(bookPagesText);


    const bookReadState = document.createElement('p');
    bookReadState.classList.add('read-state');
    const bookReadStateText = document.createTextNode(arr[i].read);
    bookReadState.appendChild(bookReadStateText);

    cardWrapper.appendChild(bookTitle);
    cardWrapper.appendChild(bookAuthor);
    cardWrapper.appendChild(bookPages);
    cardWrapper.appendChild(bookReadState);
  }
};
function displayForm() {
  const body = document.getElementById('body');
  const formWrapper = document.createElement('div');
  body.appendChild(formWrapper);
  const btn = document.createElement('button');
  const btnText = document.createTextNode('Add Book');
  btn.appendChild(btnText);
  btn.classList.add('add-btn');
  formWrapper.appendChild(btn);

  btn.addEventListener('click', () => {
    const addForm = document.createElement('form');
    formWrapper.appendChild(addForm);
    const titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'Book Title');
    addForm.appendChild(titleInput);

    const authorInput = document.createElement('input');
    authorInput.setAttribute('placeholder', 'Author Name');
    addForm.appendChild(authorInput);

    const pageInput = document.createElement('input');
    pageInput.setAttribute('placeholder', 'Number of pages');
    addForm.appendChild(pageInput);

    const readInput = document.createElement('input');
    readInput.setAttribute('type', 'checkbox');
    addForm.appendChild(readInput);
    const checkboxLabel = document.createElement('label');
    addForm.appendChild(checkboxLabel);
    const checkboxLabelText = document.createTextNode('Read?');
    checkboxLabel.appendChild(checkboxLabelText);
  });
}

displayBooks(myLibrary);
displayForm();


// function Book() {
//   //code goes here
// }

// function addBookToLibrary() {
//   // code goes here
// }
