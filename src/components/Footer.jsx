function Footer() {
  return (
    <footer className="page-footer green darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Ivan19979/react-food"
            target="_blank"
            rel="noreferrer"
          >
            GitHub project
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
