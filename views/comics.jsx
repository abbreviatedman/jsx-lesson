const React = require('react');

const Navbar = require('navbar');

const Comics = (props) => {
  const styles = {
    container: {
      padding: "20px"
    },

    book: {
      border: "1px solid #ccc", margin: "10px", padding: "10px"
    },
  };

  const comicBooks = props.books
    .filter((book) => book.type === "comic")
    .sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

  return (
    <html>
      <head>
        <title>Barnes and Noble Desktop</title>
      </head>
      <body>
        <div style={styles.container}>
          <Navbar />
          <h1>Comic Book List</h1>
          {comicBooks.length > 0 ? (
            comicBooks.map((book) => (
              <div style={styles.book}>
                <h2>
                  <a href={`/books/${book._id}`}>{book.title}</a>
                  {book.isBestSeller && <span>🌟</span>}
                </h2>
                <p>
                  <strong>Author:</strong> {book.author}
                </p>
              </div>
            ))
          ) : (
            <p>No comic books available.</p>
          )}
        </div>
      </body>
    </html>
  );
};

module.exports = Comics;
