const React = require("react");

function Comics(props) {
  const comics = props.books.filter((book) => book.type === "comic");

  return (
    <html>
      <head>
        <title>Comics</title>
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
          <section id="comics">
            <h1>Comics</h1>
            <ul>
              {comics.map((book, index) => (
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

module.exports = Comics;
