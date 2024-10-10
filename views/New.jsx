const React = require("react");

function New(props) {
  const newBooks = props.books
    .filter(
      (book) =>
        new Date(book.publicationDate) >
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    )
    .sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

  return (
    <html>
      <head>
        <title>New Books</title>
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
          <section id="new">
            <h1>New Books</h1>
            <ul>
              {newBooks.map((book) => (
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

module.exports = New;
