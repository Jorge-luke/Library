let library = [];

function Book(title, author, pages){
    this.title = title,
    this.author = author,
    this.pages = pages
}

function addBookToLibrary (title, author, pages){
   const newBook = new Book(title, author, pages);
   library.push(newBook);
}

addBookToLibrary('harry potter', "jk rolling", 350);
addBookToLibrary('Eragon', "asdasdasd", 450);
addBookToLibrary('Other', "aasdasddwr33333", 450);



let container = document.querySelector('.container');


let i = 1;
for (item of library){
    console.log(item);


    let book = document.createElement('div');
    book.className = "card";
    book.textContent = `Book book ${i} is ${item.title}`;
    container.appendChild(book);
    i++;


}
