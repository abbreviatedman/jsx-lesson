const React = require('react');

const Navbar = require('navbar');

const About = () => {
  const styles = {
    container: {
      padding: "20px"
    },
  };

  return (
    <html>
      <head>
        <title>Barnes and Noble Desktop</title>
      </head>
      <body>
        <div style={styles.container}>
          <Navbar />
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
