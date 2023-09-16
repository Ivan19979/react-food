import { useHistory } from "react-router-dom";

function About() {
  const { goBack } = useHistory();

  return (
    <>
      <h3 className="about-title">
        On this resource you can find your favorite recipe or look for something
        new for yourself
      </h3>
      <button className="btn red accent-4" onClick={goBack}>
        Go back
      </button>
    </>
  );
}
export { About };
