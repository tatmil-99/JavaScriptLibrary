let myLibrary = [];

function Book() {
  // the constructor...
}

function showBookForm() {
  let headElement = document.querySelector('.header');
  let mainElement = document.querySelector('.main');
  let footElement = document.querySelector('.footer');
  let formContainer = document.querySelector('.form-container');
  let addBookBtn = document.querySelector('.add-book');
  let wrapper = document.querySelector('.page-wrapper')
  
  addBookBtn.addEventListener('click', _ => {
    formContainer.style.display = 'flex';
    wrapper.style.opacity = '0.2';
  });
  window.addEventListener('click', e => {
    if (e.target == footElement ||
        e.target == mainElement ||
        e.target == headElement) {
          formContainer.style.display = 'none';
          wrapper.style.opacity = '1';
    }
  });
}

function gatherFormData() {
  let submitBtn = document.querySelector('.submit-book');
  let author = document.querySelector('.author-input');
  let title = document.querySelector('.book-input');
  let pages = document.querySelector('.pages-input');
  let readOrNot = document.querySelector('.read-or-not');

  submitBtn.addEventListener('click', _ => {
    console.log(author.value);
    console.log(title.value);
    console.log(pages.value);
    console.log(readOrNot.checked);
  });
}

function addBookToLibrary() {
}

showBookForm();
gatherFormData();