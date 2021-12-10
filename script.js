let myLibrary = [];

// the constructor...
function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
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
  let author = document.querySelector('.author-input');
  let title = document.querySelector('.book-input');
  let pages = document.querySelector('.pages-input');
  let read = document.querySelector('.read-or-not');
  let form = document.querySelector('.form');

  //function to return form input values in an array
  let values = [];
  form.addEventListener('submit', e => {
    e.preventDefault();
    let inputs = [author, title, pages, read];
    inputs.forEach(input => {
      if (input == read) {
        values.push(input.checked)
      } else {
        values.push(input.value);
      }
    });
    console.log(values);
    //function to add book object to library
  });
}

// function addBookToLibrary() {}

showBookForm();
gatherFormData();

