import { Link } from "react-router-dom";

const WorkList = ({ works }) => {
  const getId = (name) => {
    return name.substring(name.lastIndexOf("/") + 1);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
      {works.map((work) => (
        <div className="work-preview" key={getId(work.name)}>
          <Link to={`/works/${getId(work.name)}`}>
            <img
              src={work.fields.image.stringValue}
              className="w-full"
              alt="work"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
