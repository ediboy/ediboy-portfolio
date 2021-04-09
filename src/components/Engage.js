import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Engage = () => {
  return (
    <section className="engage container mx-auto max-w-screen-xl px-4 py-20">
      <div className="text-3xl font-medium">
        <span className="text-ediboy-primary">
          Have a project in mind? <br />
        </span>
        Let's make it happen!
      </div>

      <div className="flex justify-center mt-10">
        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <FontAwesomeIcon
            icon="tools"
            size="2x"
            className="text-ediboy-primary"
          />
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <FontAwesomeIcon
            icon="tools"
            size="2x"
            className="text-ediboy-primary"
          />
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <FontAwesomeIcon
            icon="tools"
            size="2x"
            className="text-ediboy-primary"
          />
        </div>

        <div className="border-solid border-ediboy-primary border-2 p-2 inline-block rounded-full w-16 h-16 flex items-center justify-center mx-2">
          <FontAwesomeIcon
            icon="tools"
            size="2x"
            className="text-ediboy-primary"
          />
        </div>
      </div>

      <div className="text-sm mt-10">Created using ReactJS and TailwindCSS</div>
    </section>
  );
};

export default Engage;
