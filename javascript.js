let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (title, author, pages, read){
   const newBook = new Book(title, author, pages, read);
   library.push(newBook);
}

addBookToLibrary('Harry Potter', "J. K. Rolling", 350, "yes");
addBookToLibrary('Eragon', "Christopher Paoloni", 450, "yes");

newBookForm = document.querySelector(".new-book");


let showForm = false;

function toggleForm() {

        showForm = !showForm;
        if(showForm){
        newBookForm.style.display = "flex";
        } else {
        newBookForm.style.display = "none";
        }
}

if (!showForm){
    newBookForm.style.display = "none";
}

let newBookBtn = document.querySelector(".new-book-btn");
newBookBtn.addEventListener("click", toggleForm);


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
        bookAuthor.textContent = `author: ${item.author}`;
        book.appendChild(bookAuthor);

        let bookPages = document.createElement('div');
        bookPages.className = "book-pages";
        bookPages.textContent = `pages: ${item.pages}`;
        book.appendChild(bookPages);

        let textRead = document.createElement('div');
        textRead.className = "text-read";
        textRead.textContent = "Already read?";
        book.appendChild(textRead);


        let bookRead = document.createElement('button');
        bookRead.className = "book-check";
        bookRead.textContent = `${item.read}`;
        book.appendChild(bookRead);
        bookRead.addEventListener("click", ()=> {
            if ( bookRead.textContent == "yes"){
                item.read = "no";

            }
            else {

                item.read = "yes";
            }
            bookRead.textContent = item.read;
            showCards();
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
        if (!title || !author || !pages){
            alert("Please fill all the fields!");
            showCards();
            return;
        }

        addBookToLibrary(title,author,pages,read);
        showCards();
    }
);