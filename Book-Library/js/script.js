// Example books to populate array on first load
let myLibrary = [
  {
    title: "UNIX and Linux System Administration Handbook",
    author: "Evi Nemeth",
    cover:
      "https://m.media-amazon.com/images/I/61ydSUheYOL._SX383_BO1,204,203,200_.jpg",
    pages: "1232",
    read: "Unfinished",
  },
  {
    title: "JavaScript for Kids: A Playful Introduction to Programming",
    author: "Nick Morgan",
    cover:
      "https://m.media-amazon.com/images/I/51YfamJFhkL._SX376_BO1,204,203,200_.jpg",
    pages: "336",
    read: "Unfinished",
  },
  {
    title: "Harry Potter and the Chamber of Secrets: The Illustrated Edition",
    author: "J.K. Rowling",
    cover:
      "https://m.media-amazon.com/images/I/51L7pTOL+KL._SX419_BO1,204,203,200_.jpg",
    pages: "272",
    read: "Read",
  },
  {
    title:
      "The Rise of the Dragon: An Illustrated History of the Targaryen Dynasty, Volume One",
    author: "George R. R. Martin",
    cover:
      "https://m.media-amazon.com/images/I/514Ni3iq+pL._SX376_BO1,204,203,200_.jpg",
    pages: "352",
    read: "Read",
  },
  {
    title: "The Addams Family: The Junior Novel",
    author: "Calliope Glass",
    cover:
      "https://m.media-amazon.com/images/I/51aGtBUiJ5L._SX333_BO1,204,203,200_.jpg",
    pages: "144",
    read: "Read",
  },
];

// constructor for new books
function Book(title, author, cover, pages, read) {
  this.title = title;
  this.author = author;
  this.cover = cover;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // get the form elements
  let title = document.getElementById("title");
  //let myTitle = document.querySelector("#title").value;
  let author = document.getElementById("author");
  let cover = document.getElementById("cover");
  let pages = document.getElementById("pages");
  let read = document.querySelector("input[name=read]:checked");
  let form = document.getElementById("form");
  // stop form being submitted unless fields have been filled
  let allFieldsValid = true;
  // display errors if user tries to submit empty entry
  if (title.value == "") {
    title.placeholder = "Please enter a b*Title";
    title.classList.add("placeholdRed");
    allFieldsValid = false;
  }
  if (author.value == "") {
    author.placeholder = "Please enter a b*Author";
    author.classList.add("placeholdRed");
    allFieldsValid = false;
  }
  if (pages.value == "" || pages.value < 0) {
    pages.value = "";
    pages.placeholder = "Please enter a positive b*Pages number";
    pages.classList.add("placeholdRed");
    allFieldsValid = false;
  }

  // if all fields are filled out, allow myLibrary update
  if (allFieldsValid == true) {
    let newBook = new Book(
      title.value,
      author.value,
      cover.value,
      pages.value,
      read.value
    );
    // add new book object to array
    myLibrary.push(newBook);
    populateStorage();

    createCard(newBook, myLibrary.length - 1);
    modal.style.display = "none";

    // remove error messages and reset form for next entry
    resetPlaceholders(title, author, pages);
    form.reset();
    // can add a function here to reset placeholders
  }
  //////////////TRIED TO CREATE `YOU CAN`T ADD BOOK IF THERE IS ONE THE SAME EXIST BUT FAILED`
  ////////////////
  /*if (myLibrary.some((elem) => elem.title == title)) {
      alert("Book is already in library");
      return;
    } else {
      let newBook = new Book(title, author, pages, read);
      addBookToLibrary(newBook);
      return;
    };*/
  ////////////////
}

function resetPlaceholders(title, author, pages) {
  title.placeholder = "UNIX and Linux System Administration Handbook";
  title.classList.remove("placeholdRed");
  author.placeholder = "Evi Nemeth";
  author.classList.remove("placeholdRed");
  pages.placeholder = "1232";
  pages.classList.remove("placeholdRed");
}

function deleteFromLibrary(index) {
  // remove index item from array
  myLibrary.splice(index, 1);
  populateStorage();
  // delete all cards and re-display array (so that indexes will be correct)
  const deleteAllCards = document.querySelectorAll(".card");
  deleteAllCards.forEach((card) => card.remove());
  displayBooks(myLibrary);
}

function changeReadStatus(icon, text, button, index) {
  // update status in myLibrary
  toggleReadStatus(myLibrary[index]);
  populateStorage();
  // update icons, text and button class of change button
  if (icon.src.includes("/assets/icons/accept_mark.svg")) {
    icon.src = "assets/icons/delete.svg";
    button.classList.remove("read");
    button.classList.add("unread");
    text.textContent = "Unfinished";
  } else if (icon.src.includes("/assets/icons/delete.svg")) {
    icon.src = "assets/icons/accept_mark.svg";
    button.classList.remove("unread");
    button.classList.add("read");
    text.textContent = "Read";
  }
}

// this is not done on book.prototype as the book constructor gets removed after JSON parse
function toggleReadStatus(book) {
  if (book.read == "Read") {
    book.read = "Unfinished";
  } else {
    book.read = "Read";
  }
}

// the display library, to which we will append the book cards
const library = document.getElementById("library");

function createCard(book, index) {
  //create card
  const card = document.createElement("div");
  card.id = index;
  card.classList.add("card");

  // add delete button
  const deleteBtn = document.createElement("img");
  deleteBtn.classList.add("trash");
  deleteBtn.src = "assets/icons/delete_alarm.svg";
  deleteBtn.addEventListener("click", () => deleteFromLibrary(index));
  card.appendChild(deleteBtn);

  // add book cover
  const cover = document.createElement("img");
  cover.classList.add("cover");
  if (!book.cover) {
    cover.src = "assets/img/book_and_person_summer.svg";
  } else {
    cover.src = book.cover;
  }
  // if cover image throws an error when loading, replace with stock image
  cover.onerror = function () {
    cover.src = "assets/img/book_and_person_winter.svg";
  };
  card.appendChild(cover);

  // add book title
  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("bookTitle");
  bookTitle.innerHTML = book.title;
  card.appendChild(bookTitle);

  // add author
  const author = document.createElement("h4");
  author.innerHTML = book.author;
  card.appendChild(author);

  // add number of pages
  const pages = document.createElement("h4");
  pages.innerHTML = `Pages: ${book.pages}`;
  card.appendChild(pages);

  // add read button
  const readButton = document.createElement("button");
  // add read status within button
  const readStatus = document.createElement("h4");
  readStatus.classList.add("readText");
  readStatus.innerHTML = book.read;
  // add read icon (tick or cross) within button
  const readIcon = document.createElement("img");
  readIcon.classList.add("readCheck");
  if (book.read == "Read") {
    readIcon.src = "assets/icons/accept_mark.svg";
    readButton.classList.add("read");
  } else {
    readIcon.src = "assets/icons/delete.svg";
    readButton.classList.add("unread");
  }
  readButton.appendChild(readStatus);
  readButton.appendChild(readIcon);
  readButton.addEventListener("click", () =>
    changeReadStatus(readIcon, readStatus, readButton, index)
  );
  card.appendChild(readButton);

  // add all of the above to library div
  library.appendChild(card);
}

// display the books in the array
function displayBooks(arr) {
  for (var i = 0; i < arr.length; i++) {
    createCard(arr[i], i);
  }
}

// ---------- MODAL FORM ---------- //
// Get the modal
var modal = document.getElementById("bookForm");
// Get the button that opens the modal
var btn = document.getElementById("newBook");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// --------------- / MODAL FORM -------------- //

// populate local storage with myLibrary
function populateStorage() {
  localStorage.setItem("storedLibrary", JSON.stringify(myLibrary));
}

// restore contents of myLibrary when user refreshes the page
function restore() {
  // if local storage is empty, display contents of myLibrary
  if (!localStorage.storedLibrary) {
    displayBooks(myLibrary);
  } else {
    let restoredObjects = localStorage.getItem("storedLibrary");
    restoredObjects = JSON.parse(restoredObjects);
    myLibrary = restoredObjects;
    displayBooks(myLibrary);
  }
}

// when the user loads page for first time, they will see the example books
// after that, any changes they make to the array will be saved to the localStorage
// to clear local storage, go to Console -> Application, Local Storage, right click File and Clear.
restore();
