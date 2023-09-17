import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div className="recipe-container">
        <div class="container">
          <div class="text">
            <h1>Page Not Found</h1>
            <p>
              We can't seem to find the page you're looking for. Please check
              the URL for any typos.
            </p>
            <div class="input-box"></div>
          </div>
          <div>
            <Link to="/">Home Page</Link>
            <img
              class="image"
              src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png"
              alt="404"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export { NotFound };
