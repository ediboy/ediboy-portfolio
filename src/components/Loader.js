import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="p-10">
      <FontAwesomeIcon
        icon="hourglass-start"
        size="2x"
        className="animate-spin text-white"
      />
    </div>
  );
};

export default Loader;
