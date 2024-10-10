const React = require("react");

function Bestsellers(props) {
  const bestsellers = props.books.filter((book) => book.isBestSeller);

  return (
    <html>
      <head>
        <title>Bestsellers</title>
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
          <section id="bestsellers">
            <h1>Bestsellers</h1>
            <ul>
              {bestsellers.map((book) => (
                <li className="book-item">
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                </li>
              ))}
            </ul>
          </section>
          <About />
          <Contact />
        </main>
      </body>
    </html>
  );
}

module.exports = Bestsellers;
