const React = require("react");

function Contact() {
  return (
    <html>
      <head>
        <title>Book List</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <nav>
          <h1>Book List App</h1>
          <ul>
            <li>
              <a href="/new">New</a>
            </li>
            <li>
              <a href="/comics">Comics</a>
            </li>
            <li>
              <a href="/bestsellers">Bestsellers</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main>
          <section id="contact" className="section-content">
            <h1>Contact</h1>
            <p>Address: 123 Book St, Bookville</p>
            <p>
              Email:{" "}
              <a href="mailto:info@noble-desktop-books.com">
                info@noble-desktop-books.com
              </a>
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}

module.exports = Contact;
