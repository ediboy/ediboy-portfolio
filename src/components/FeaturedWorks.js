import WorkList from "./WorkList";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const FeaturedWorks = () => {
  const { error, isLoading, data: works } = useFetch(
    "https://firestore.googleapis.com/v1/projects/ediboy-ilagan/databases/(default)/documents/featured-works?orderBy=id"
  );

  return (
    <section className="works px-4 bg-ediboy-primary py-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-3xl font-medium">Featured Projects</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          some projects I've done or involved in
        </div>

        {error && <div className="text-red-400 p-20">{error}</div>}

        {isLoading ? (
          <Loader />
        ) : (
          works && (
            <div>
              <WorkList works={works.documents} max={3} />
            </div>
          )
        )}

        <div>
          <Link to="/works">
            <div className="mt-6 px-6 py-2 border border-white rounded-full border-solid inline-block hover:bg-black hover:bg-opacity-10 cursor-pointer">
              View More
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
