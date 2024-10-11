const React = require('react');

const About = () => {
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
          <h1>About Barnes and Noble Desktop</h1>
          <p>
            Welcome to Barnes and Noble Desktop! We are your one-stop shop for
            books of all genres, from fiction and non-fiction to comics and
            more. Our mission is to bring the joy of reading to your desktop
            with an easy-to-navigate interface and a curated selection of books.
          </p>
        </div>
      </body>
    </html>
  );
};

module.exports = About;
