const React = require("react");

function Books(props) {
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
          <section id="books">
            <h1>Book List</h1>
            <ul>
              {props.books.map((book) => (
                <li className="book-item">
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </body>
    </html>
  );
}

module.exports = Books;
