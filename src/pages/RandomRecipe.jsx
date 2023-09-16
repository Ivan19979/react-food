import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRandomRecipe, getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function RandomRecipe() {
  const [recipe, setRecipe] = useState({});
  const { push } = useHistory();
  const { pathname, search } = useLocation();

  useEffect(() => {
    search === "?search="
      ? getRandomRecipe().then((data) => {
          push({
            pathname,
            search: `search=${data.meals[0].idMeal}`,
          });
        })
      : getMealById(search.split("=")[1]).then((data) => {
          setRecipe(data.meals[0]);
        });
  }, [search]);

  return (
    <>
      {!recipe ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <h1 className="recipe-title">{recipe.strMeal}</h1>
          <img
            className="recipe-img"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <h4>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
          <p className="pecipe-description">{recipe.strInstructions}</p>

          <table className="striped">
            <thead>
              <tr>
                <th>Ingridient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                title={recipe.strMeal}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export { RandomRecipe };
