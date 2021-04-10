import WorkList from "./WorkList";
import useFetch from "hooks/useFetch";

const FeaturedWorks = () => {
  const { error, isLoading, data: works } = useFetch(
    "https://firestore.googleapis.com/v1/projects/ediboy-ilagan/databases/(default)/documents/works"
  );

  return (
    <section className="works px-4 bg-ediboy-primary py-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-3xl font-medium">Works</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          Some works that I've done or involve in
        </div>

        {works && (
          <div>
            <WorkList works={works.documents} />
          </div>
        )}

        <div>
          <div className="mt-6 px-6 py-2 border border-white rounded-full border-solid inline-block">
            View More
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
