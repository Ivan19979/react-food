import { useHistory } from "react-router-dom";

function Contact() {
  const { goBack } = useHistory();

  return (
    <>
      <h3>This Page leads to other services</h3>
      <ul className="contacts-links">
        <li>
          <a
            className="contacts-list"
            href="https://github.com/Ivan19979"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="contacts-list"
            href="https://github.com/Ivan19979"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            className="contacts-list"
            href="https://github.com/Ivan19979"
            target="_blank"
            rel="noreferrer"
          >
            LinkendIn
          </a>
        </li>
      </ul>
      <button className="btn  grey darken-2" onClick={goBack}>
        Go back
      </button>
    </>
  );
}
export { Contact };
