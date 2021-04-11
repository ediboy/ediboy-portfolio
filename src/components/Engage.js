import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Engage = () => {
  return (
    <section className="engage container mx-auto max-w-screen-xl px-4 pt-20 pb-5">
      <div className="text-3xl font-medium">
        <span className="text-ediboy-primary">
          Have a project in mind? <br />
        </span>
        Let's make it happen!
      </div>

      <div className="flex justify-center mt-10">
        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <a href="https://www.linkedin.com/in/ediboy-ilagan/" target="new">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className="text-ediboy-primary"
            />
          </a>
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <a href="https://github.com/ediboy" target="new">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              className="text-ediboy-primary"
            />
          </a>
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <a href="https://www.instagram.com/ediboyilagan" target="new">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              className="text-ediboy-primary"
            />
          </a>
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <a href="https://twitter.com/ediboyilagan" target="new">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="2x"
              className="text-ediboy-primary"
            />
          </a>
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <Link to="/ediboy-portfolio/contact">
            <FontAwesomeIcon
              icon="envelope"
              size="2x"
              className="text-ediboy-primary"
            />{" "}
          </Link>
        </div>
      </div>

      <div className="text-xs mt-10">Created using ReactJS and TailwindCSS</div>
    </section>
  );
};

export default Engage;
