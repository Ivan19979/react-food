import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button
        className="btn red accent-4"
        onClick={() => {
          push({
            pathname: "/",
          });
        }}
      >
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
      {!meals.length ? null : (
        <button
          className="btn red accent-4"
          onClick={() => {
            push({
              pathname: "/",
            });
          }}
        >
          Go back
        </button>
      )}
    </>
  );
}

export { Category };
