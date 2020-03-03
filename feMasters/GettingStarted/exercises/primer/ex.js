// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    // making a decision
    if (!bookName.includes("Great")) {
        console.log(bookName);
        // pushing the updated set of items into the favoriteBooks array
        // the generic is someArray.push(value)
        favoriteBooks.push(bookName);
    }
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    console.log(
        // using template strings
        `Favs are: ${favoriteBooks.length}`
    );
    // using the for let .. of loop style
    for (let bookName of favoriteBooks) {
        console.log(bookName);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// call it and will be executing with the () at end 
printFavoriteBooks();

// console.log(favoriteBooks);

// TODO: print out favorite books

