function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeStatus = (element) => {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
  element.innerHTML = `Read book?: ${this.read}`;
};

const myLibrary = [];
myLibrary.push(new Book('Romeo and Juliet', 'William Shakespear', 234, true));
myLibrary.push(new Book('Oliver Twist', 'Charles Dickens', 122, false));
myLibrary.push(new Book('Today and Tomorrow', 'Dummy James', 268, false));

function clearDom() {
  document.body.innerHTML = '';
}

function displayHeader() {
  const body = document.getElementById('body');

  const header = document.createElement('h3');
  header.classList.add('header');
  const headerText = document.createTextNode('My Library');
  header.appendChild(headerText);
  body.appendChild(header);
}

function addBookToLibrary() {
  const titleValue = document.getElementsByTagName('input')[0].value;
  const authorValue = document.getElementsByTagName('input')[1].value;
  const pageValue = document.getElementsByTagName('input')[2].value;
  const checkboxState = () => {
    if (document.getElementsByTagName('input')[3].checked) {
      return true;
    }
    return false;
  };
  const readValue = checkboxState();
  myLibrary.push(new Book(titleValue, authorValue, pageValue, readValue));
  clearDom();
  displayBooks(myLibrary);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  clearDom();
  displayBooks(myLibrary);
}

function displayForm() {
  const body = document.getElementById('body');
  const formWrapper = document.createElement('div');
  formWrapper.classList.add('form-wrapper');
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

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.classList.add('submit');
    const submitButtonText = document.createTextNode('ADD');
    submitButton.appendChild(submitButtonText);
    addForm.appendChild(submitButton);
    submitButton.addEventListener('click', addBookToLibrary);
  });
}

const displayBooks = (arr) => {
  displayHeader();
  for (let i = 0; i < arr.length; i += 1) {
    const body = document.getElementById('body');

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('book-wrapper');
    cardWrapper.setAttribute('data-index-number', i);
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
    const bookPagesText = document.createTextNode(`Pages: ${arr[i].pages}`);
    bookPages.appendChild(bookPagesText);


    const bookReadState = document.createElement('p');
    bookReadState.classList.add('read-state');
    const bookReadStateText = document.createTextNode(`Read book?: ${arr[i].read}`);
    bookReadState.appendChild(bookReadStateText);

    const readstatusBtn = document.createElement('button');
    readstatusBtn.classList.add('change-status');
    const readstatusBtntxt = document.createTextNode('change read status');
    readstatusBtn.appendChild(readstatusBtntxt);
    readstatusBtn.addEventListener('click', () => { arr[i].changeStatus(bookReadState); });

    const removeBookButton = document.createElement('button');
    removeBookButton.setAttribute('type', 'button');
    const removeBookButtonText = document.createTextNode('remove');
    removeBookButton.appendChild(removeBookButtonText);
    const index = cardWrapper.getAttribute('data-index-number');
    removeBookButton.addEventListener('click', () => { removeBookFromLibrary(index); }, false);


    cardWrapper.appendChild(bookTitle);
    cardWrapper.appendChild(bookAuthor);
    cardWrapper.appendChild(bookPages);
    cardWrapper.appendChild(bookReadState);
    cardWrapper.appendChild(removeBookButton);
    cardWrapper.appendChild(readstatusBtn);
  }
  displayForm();
};

displayBooks(myLibrary);
