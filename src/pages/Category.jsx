import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn  grey darken-2" onClick={goBack}>
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
