const React = require('react');

const Navbar = require('navbar');

const ContactPage = () => {
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
