import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="deep-purple brown">
      <div className="nav-wrapper">
        <Link to="/meal?search=" className="brand-logo">
          Random&nbsp;Recipe
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
