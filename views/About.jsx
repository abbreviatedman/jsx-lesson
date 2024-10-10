const React = require("react");

function About() {
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
          <section id="about" class="section-content">
            <h1>About</h1>
            <p>
              This is a simple Book List App created to demonstrate the
              differences between EJS and JSX.
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}

module.exports = About;
