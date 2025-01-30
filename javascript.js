let library = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read
}

function addBookToLibrary (title, author, pages, read){
   const newBook = new Book(title, author, pages, read);
   library.push(newBook);
}

addBookToLibrary('harry potter', "jk rolling", 350, "yes");
addBookToLibrary('Eragon', "asdasdasd", 450, "no");

let cardsContainer = document.querySelector('.cards-container');

function showCards (){

    cardsContainer.innerHTML="";
    library.forEach((item, index) => {
        console.log(item);

        let book = document.createElement('div');
        book.className = "card";
        cardsContainer.appendChild(book);

        let bookTitle = document.createElement('div');
        bookTitle.className = "book-title";
        bookTitle.textContent = `${item.title}`;
        book.appendChild(bookTitle);

        let bookAuthor = document.createElement('div');
        bookAuthor.className = "book-author";
        bookAuthor.textContent = `${item.author}`;
        book.appendChild(bookAuthor);

        let bookPages = document.createElement('div');
        bookPages.className = "book-pages";
        bookPages.textContent = `${item.pages}`;
        book.appendChild(bookPages);

        let bookRead = document.createElement('button');
        bookRead.className = "book-check";
        bookRead.textContent = `${item.read}`;
        book.appendChild(bookRead);
        bookRead.addEventListener("click", ()=> {
            if (bookRead.textContent == "yes"){
                bookRead.textContent = "no";
            }
            else {
                bookRead.textContent = "yes";
            }
                     });
            
                    
            let del = document.createElement('button');
            del.className = "del";
            del.textContent = "X";
            book.appendChild(del);
            del.addEventListener('click', ()=>{
                library.splice(index,1);
                showCards();
              });
   });
};

showCards();

let btn = document.querySelector(".btn");
btn.addEventListener("click",
    ()=> {
        cardsContainer.innerHTML="";

        let title = document.querySelector("#input-title").value;
        let author = document.querySelector("#input-author").value;
        let pages = document.querySelector("#input-pages").value;
        let read = document.querySelector("#check-read");
        if (read.checked){
            read = 'yes';
        }else{
            read = 'no';
        }

        addBookToLibrary(title,author,pages,read);
        showCards();
    }
);