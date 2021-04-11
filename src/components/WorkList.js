const WorkList = ({ works, max }) => {
  const getId = (name) => {
    return name.substring(name.lastIndexOf("/") + 1);
  };

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${max} gap-2 md:gap-4`}
    >
      {works.map((work) => (
        <div className="work-preview relative" key={getId(work.name)}>
          <a href={work.fields.link.stringValue} target="new">
            <div>
              <img
                src={work.fields.image.stringValue}
                className="w-full"
                alt="work"
              />
              <div className="text-sm absolute bottom-5 left-0 px-4 py-2 bg-black bg-opacity-60">
                {work.fields.title.stringValue}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
