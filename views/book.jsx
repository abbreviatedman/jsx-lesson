const React = require('react');

const Book = (props) => {
  const book = props.book;
  const styles = {
    container: {
      padding: "20px"
    },

    navbar: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "20px",
    },

    navItem: {
      textDecoration: "none",
      color: "#333"
    },

    book: {
      border: "1px solid #ccc",
      margin: "10px",
      padding: "10px"
    },
  };

  return (
    <html>
      <head>
        <title>Barnes and Noble Desktop</title>
      </head>
      <body>
        <div style={styles.container}>
          <nav style={styles.navbar}>
            <a href="/books" style={styles.navItem}>
              Books
            </a>
            <a href="/comics" style={styles.navItem}>
              Comics
            </a>
            <a href="/about" style={styles.navItem}>
              About
            </a>
            <a href="/contact" style={styles.navItem}>
              Contact
            </a>
          </nav>
          <h1>{book.title}</h1>
          <div style={styles.book}>
            <h2>
              {book.title} {book.isBestSeller && <span>🌟</span>}
            </h2>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Type:</strong> {book.type}
            </p>
            <p>
              <strong>Published on:</strong>{" "}
              {new Date(book.publicationDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

module.exports = Book;
