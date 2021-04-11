import useFetch from "hooks/useFetch";
import Engage from "components/Engage";
import WorkList from "components/WorkList";
import Loader from "components/Loader";

const Works = () => {
  const { error, isLoading, data: works } = useFetch(
    "https://firestore.googleapis.com/v1/projects/ediboy-ilagan/databases/(default)/documents/works?orderBy=id"
  );
  return (
    <section className="works container mx-auto max-w-screen-xl px-4 py-2">
      <div className="text-4xl font-medium mb-2">
        <span className="text-ediboy-primary">P</span>rojects
      </div>

      <div className="text-xl font-thin mb-6 text-gray-200">
        some projects I've done or involved in
      </div>

      {error && <div className="text-red-400 p-20">{error}</div>}

      {isLoading ? (
        <Loader />
      ) : (
        works && (
          <div>
            <WorkList works={works.documents} max={4} />
          </div>
        )
      )}
      <Engage />
    </section>
  );
};

export default Works;
