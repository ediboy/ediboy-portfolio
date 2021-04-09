const Works = () => {
  return (
    <section className="works px-4 bg-ediboy-primary py-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-3xl font-medium">Works</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          Some works that I've done or involve in
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          <img
            src="https://www.miyens.com/wp-content/uploads/2018/10/proactivelogo.jpg"
            className="w-full"
          />
          <img
            src="https://www.miyens.com/wp-content/uploads/2018/10/proactivelogo.jpg"
            className="w-full"
          />
          <img
            src="https://www.miyens.com/wp-content/uploads/2018/10/proactivelogo.jpg"
            className="w-full"
          />
          <img
            src="https://www.miyens.com/wp-content/uploads/2018/10/proactivelogo.jpg"
            className="w-full"
          />
          <img
            src="https://www.miyens.com/wp-content/uploads/2018/10/proactivelogo.jpg"
            className="w-full"
          />
          <img
            src="https://www.miyens.com/wp-content/uploads/2018/10/proactivelogo.jpg"
            className="w-full"
          />
        </div>

        <div>
          <div className="mt-6 px-6 py-2 border border-white rounded-full border-solid inline-block">
            View More
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
