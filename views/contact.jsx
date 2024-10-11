const React = require('react');

const ContactPage = () => {
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
          <h1>Contact Us</h1>
          <p>
            Email:{" "}
            <a href="mailto:hello@nobledesktop.com">hello@nobledesktop.com</a>
          </p>
          <p>Address: 185 Madison St. 3rd Floor, Manhattan</p>
        </div>
      </body>
    </html>
  );
};

module.exports = ContactPage;
