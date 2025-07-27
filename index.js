const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    if (typeof title !== 'string' || typeof author !== 'string' || typeof year !== 'number') {
      console.log(" Book information is incomplete or invalid.");
      return;
    }

    if (this.findBookByTitle(title)) {
      console.log(` A book with the title "${title}" already exists.`);
      return;
    }

    this.books.push({ title, author, year });
    console.log(` Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(` Book "${removed.title}" removed.`);
    } else {
      console.log(` Book titled "${title}" not found.`);
    }
  },

  listBooks() {
    console.log(" Library Collection:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.year})`);
    });
  }
};

library.addBook({ author: "George Orwell", year: 1949 });

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log(library.books.length);

library.removeBook("The Hobbit");

library.removeBook("The Hobbit");

library.listBooks();



