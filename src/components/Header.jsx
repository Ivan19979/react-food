import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRandomRecipe } from "../api";

function Header() {
  const [recipe, setRecipe] = useState({});
  const [newRandom, setNewRandom] = useState(false);

  useEffect(() => {
    getRandomRecipe().then((data) => setRecipe(data.meals[0]));
  }, [newRandom]);
  return (
    <nav className="deep-purple brown">
      <div className="nav-wrapper">
        <Link
          to={`/meal/${recipe.idMeal}`}
          className="left brand-logo"
          onClick={() => setNewRandom(!newRandom)}
        >
          Random&nbsp;Recipe
        </Link>
        <ul className="right nav-list">
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
