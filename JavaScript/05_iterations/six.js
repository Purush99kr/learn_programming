//dataset example

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: 2014,
    writer: "Paulo Coelho",
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Business",
    publish: 1997,
    edition: 2022,
    writer: "Robert Kiyosaki",
  },
  {
    title: "A Brief History of Time",
    genre: "Science",
    publish: 1988,
    edition: 2011,
    writer: "Stephen Hawking",
  },
  {
    title: "The Theory of Everything",
    genre: "Science",
    publish: 2002,
    edition: 2015,
    writer: "Stephen Hawking",
  },
  {
    title: "The Great Gatsby",
    genre: "Literature",
    publish: 1925,
    edition: 2020,
    writer: "F. Scott Fitzgerald",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Literature",
    publish: 1960,
    edition: 2015,
    writer: "Harper Lee",
  },
  {
    title: "1984",
    genre: "Fiction",
    publish: 1949,
    edition: 2021,
    writer: "George Orwell",
  },
  {
    title: "Atomic Habits",
    genre: "Self Help",
    publish: 2018,
    edition: 2023,
    writer: "James Clear",
  },
  {
    title: "Think and Grow Rich",
    genre: "Business",
    publish: 1937,
    edition: 2019,
    writer: "Napoleon Hill",
  },
  {
    title: "The Intelligent Investor",
    genre: "Finance",
    publish: 1949,
    edition: 2021,
    writer: "Benjamin Graham",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: 2018,
    writer: "J.K. Rowling",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: 2020,
    writer: "J.R.R. Tolkien",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: 1954,
    edition: 2022,
    writer: "J.R.R. Tolkien",
  },
  {
    title: "Sapiens",
    genre: "History",
    publish: 2011,
    edition: 2021,
    writer: "Yuval Noah Harari",
  },
  {
    title: "Homo Deus",
    genre: "History",
    publish: 2015,
    edition: 2022,
    writer: "Yuval Noah Harari",
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    publish: 2011,
    edition: 2019,
    writer: "Eric Ries",
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: 2021,
    writer: "Robert C. Martin",
  },
  {
    title: "JavaScript: The Good Parts",
    genre: "Programming",
    publish: 2008,
    edition: 2020,
    writer: "Douglas Crockford",
  },
  {
    title: "You Don't Know JS",
    genre: "Programming",
    publish: 2015,
    edition: 2022,
    writer: "Kyle Simpson",
  },
  {
    title: "Introduction to Algorithms",
    genre: "Mathematics",
    publish: 1990,
    edition: 2022,
    writer: "Thomas H. Cormen",
  },
  {
    title: "Higher Engineering Mathematics",
    genre: "Mathematics",
    publish: 1970,
    edition: 2021,
    writer: "B.S. Grewal",
  },
  {
    title: "The Da Vinci Code",
    genre: "Novel",
    publish: 2003,
    edition: 2018,
    writer: "Dan Brown",
  },
  {
    title: "Angels and Demons",
    genre: "Novel",
    publish: 2000,
    edition: 2019,
    writer: "Dan Brown",
  },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    publish: 2020,
    edition: 2023,
    writer: "Morgan Housel",
  },
  {
    title: "Deep Work",
    genre: "Self Help",
    publish: 2016,
    edition: 2021,
    writer: "Cal Newport",
  },
  {
    title: "The Power of Habit",
    genre: "Self Help",
    publish: 2012,
    edition: 2020,
    writer: "Charles Duhigg",
  },
  {
    title: "Wings of Fire",
    genre: "Biography",
    publish: 1999,
    edition: 2022,
    writer: "A.P.J. Abdul Kalam",
  },
  {
    title: "Ignited Minds",
    genre: "Motivational",
    publish: 2002,
    edition: 2020,
    writer: "A.P.J. Abdul Kalam",
  },
  {
    title: "The Monk Who Sold His Ferrari",
    genre: "Novel",
    publish: 1997,
    edition: 2019,
    writer: "Robin Sharma",
  },
  {
    title: "Pride and Prejudice",
    genre: "Literature",
    publish: 1813,
    edition: 2021,
    writer: "Jane Austen",
  },
];

//filtering using filter()
let userBooks = books.filter((book) => book.genre === "Fiction");
userBooks = books.filter((book) => {
  //   return book.publish >= 2000 && book.genre === "History";
});
console.log(userBooks);

// filtering using map()
let famousBooks = books.map((book) => book.title);
console.log(famousBooks);
