// Using variables to represent a book

var bookTitle;
var bookAuthor;
var book2;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";
console.log(bookTitle + "by" + bookAuthor);

book2Title="Ignited Minds";
book2Author="A.P.J Abdul Kalam";
console.log(book2 +"by"+book2Author);

book3Title="War and Peace";
book3Author="Leo Tolstoy";
console.log(book3Title + " by " + book3Author);

var books=[
      {title:"The Hobbit", author:"J.R.R Tolkien"},
      {title:"Ignited Minds", author:"A.P.J Abdul Kalam"},
      {title:"War and Peace", author:"Leo Tolstoy"},
      {title:"Chitra ", author:"Rabindranath Tagore"},
      {title:"Conquest of Self ", author:"Mahatma Gandhi"},
      {title:"Discovery of India ", author:"Jawaharlal Nehru"},
      {title:"Divine Life ", author:"Swami Sivananda"},
      {title:"By God’s Decree", author:"Kapil Dev"},
      {title:"A River Sutra ", author:"Gita Mehta"},
      {title:"Gita Rahasya", author:"Bal Gangadhar Tilak"},
];
for (let i = 0; i < books.length; i++) {
  console.log("Book " + (i + 1) + " Details:");
  console.log("Title: " + books[i].title);
  console.log("Author: " + books[i].author);
}



/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */