import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
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
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button
        className="btn  red accent-4"
        onClick={() => {
          push({
            pathname: `/category/${recipe.strCategory}`,
          });
        }}
      >
        Go back
      </button>
    </>
  );
}

export { Recipe };
