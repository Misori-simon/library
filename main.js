class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeStatus = (element) => {
    if (this.read === true) {
      this.read = false;
    } else {
      this.read = true;
    }
    element.innerHTML = `Read book?: ${this.read}`;
  }
}

const myLibrary = [];
myLibrary.push(new Book('Romeo and Juliet', 'William Shakespear', 234, true));
myLibrary.push(new Book('Oliver Twist', 'Charles Dickens', 122, false));
myLibrary.push(new Book('Today and Tomorrow', 'Dummy James', 268, false));

// dom control functions
const dom = (() => {
  const getElementUsingId = (id) => document.getElementById(id);
  const createAndAppendElement = (element, parent) => {
    element = document.createElement(element);
    parent.appendChild(element);
    return element;
  };
  const addTextToElement = (text, element) => {
    const elementText = document.createTextNode(text);
    element.appendChild(elementText);
  };

  const clearDom = () => {
    document.body.innerHTML = '';
  };

  const displayHeader = () => {
    const body = getElementUsingId('body');
    const header = createAndAppendElement('h3', body);
    header.classList.add('header');
    addTextToElement('My Library', header);
  };

  const showForm = (formWrapper) => {
    const addForm = createAndAppendElement('form', formWrapper);

    const titleInput = createAndAppendElement('input', addForm);
    titleInput.setAttribute('placeholder', 'Book Title');

    const authorInput = createAndAppendElement('input', addForm);
    authorInput.setAttribute('placeholder', 'Author Name');

    const pageInput = createAndAppendElement('input', addForm);
    pageInput.setAttribute('placeholder', 'Number of pages');

    const readInput = createAndAppendElement('input', addForm);
    readInput.setAttribute('type', 'checkbox');

    const checkboxLabel = createAndAppendElement('label', addForm);
    addTextToElement('Read?', checkboxLabel);

    const submitButton = createAndAppendElement('button', addForm);
    submitButton.setAttribute('type', 'button');
    submitButton.classList.add('submit');
    addTextToElement('ADD', submitButton);
    submitButton.addEventListener('click', library.addBookToLibrary); // eslint-disable-line no-use-before-define
  };

  const displayForm = () => {
    const body = getElementUsingId('body');
    const formWrapper = createAndAppendElement('div', body);
    formWrapper.classList.add('form-wrapper');

    const btn = createAndAppendElement('button', formWrapper);
    addTextToElement('Add Book', btn);
    btn.classList.add('add-btn');
    btn.addEventListener('click', () => { showForm(formWrapper); });
  };

  const displayBooks = (arr) => {
    displayHeader();
    for (let i = 0; i < arr.length; i += 1) {
      const body = getElementUsingId('body');

      const cardWrapper = createAndAppendElement('div', body);
      cardWrapper.classList.add('book-wrapper');
      cardWrapper.setAttribute('data-index-number', i);

      const bookTitle = createAndAppendElement('h3', cardWrapper);
      bookTitle.classList.add('title');
      addTextToElement(arr[i].title, bookTitle);

      const bookAuthor = createAndAppendElement('h3', cardWrapper);
      bookAuthor.classList.add('author');
      addTextToElement(arr[i].author, bookAuthor);

      const bookPages = createAndAppendElement('p', cardWrapper);
      bookPages.classList.add('pages');
      addTextToElement(`Pages: ${arr[i].pages}`, bookPages);

      const bookReadState = createAndAppendElement('p', cardWrapper);
      bookReadState.classList.add('read-state');
      addTextToElement(`Read book?: ${arr[i].read}`, bookReadState);

      const readstatusBtn = createAndAppendElement('button', cardWrapper);
      readstatusBtn.classList.add('change-status');
      addTextToElement('change read status', readstatusBtn);
      readstatusBtn.addEventListener('click', () => { arr[i].changeStatus(bookReadState); });

      const removeBookButton = createAndAppendElement('button', cardWrapper);
      removeBookButton.setAttribute('type', 'button');
      addTextToElement('remove', removeBookButton);
      const index = cardWrapper.getAttribute('data-index-number');
      removeBookButton.addEventListener('click', () => { library.removeBookFromLibrary(index); }, false); // eslint-disable-line no-use-before-define
    }
    displayForm();
  };

  return {
    clearDom,
    displayHeader,
    showForm,
    displayForm,
    displayBooks,
  };
})();

const library = (() => {
  const addBookToLibrary = () => {
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
    dom.clearDom();
    dom.displayBooks(myLibrary); // eslint-disable-line no-use-before-define
  };

  const removeBookFromLibrary = (index) => {
    myLibrary.splice(index, 1);
    dom.clearDom();
    dom.displayBooks(myLibrary); // eslint-disable-line no-use-before-define
  };

  return {
    addBookToLibrary,
    removeBookFromLibrary,
  };
})();

dom.displayBooks(myLibrary);
