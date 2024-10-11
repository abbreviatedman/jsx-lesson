const React = require('react');

const Navbar = function() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "20px",
    },

    navItem: {
      textDecoration: "none",
      color: "#333"
    },
  }

  return (
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
  )
}

module.exports = Navbar;
