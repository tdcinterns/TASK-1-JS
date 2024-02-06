let books = [
    {
        title : 'Robinson Crusoe',
        author : 'Daniel Defoe',
        publishYear : 1719,
        isRead : true
        
    },
    {
        title : 'Infinite Jest',
        author : 'David Foster',
        publishYear : 1996,
        isRead : false
    },
    {
        title : 'A Fine Balance',
        author : 'Rohinton Mistry',
        publishYear : 1995,
        isRead : false
    },
    {
        title : 'Good Bye Mr. Chips',
        author : 'James Hilton',
        publishYear : 1934,
        isRead : true
    }
];

console.log("Titles of all books:");
books.forEach((book) => {
    console.log(book.title);
});

let authors = books.map((book) => {
    return book.author;
});
console.log("Authors array:");
console.log(authors);

const getUnreadBooks = () => {
    return books.filter((book) => book.isRead !== true).map((book) => book.title);
};

console.log("Unread books:");
console.log(getUnreadBooks());

function findBookByTitle(title)
{
    return books.find((book) => {
        return book.title === title;
    });
};

let bookWithTitle = findBookByTitle("Good Bye Mr. Chips");
console.log("Book with title 'Good Bye Mr. Chips':");
console.log(bookWithTitle);