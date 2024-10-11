const React = require('react');

const Navbar = require('navbar');

const Books = (props) => {
  const styles = {
    container: {
      padding: "20px"
    },

    book: {
      border: "1px solid #ccc", margin: "10px", padding: "10px"
    },
  };

  const sortedBooks = props.books.sort(
    (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate)
  );

  return (
    <html>
      <head>
        <title>Barnes and Noble Desktop</title>
      </head>
      <body>
        <div style={styles.container}>
          <Navbar />
          <h1>Book List</h1>
          {sortedBooks.length > 0 ? (
            sortedBooks.map((book) => (
              <div style={styles.book}>
                <h2>
                  <a href={`/books/${book._id}`}>{book.title}</a> {book.isBestSeller && <span>🌟</span>}
                </h2>
                <p>
                  <strong>Author:</strong> {book.author}
                </p>
              </div>
            ))
          ) : (
            <p>No books available.</p>
          )}
        </div>
      </body>
    </html>
  );
};

module.exports = Books;
