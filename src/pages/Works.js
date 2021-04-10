import useFetch from "hooks/useFetch";
import Engage from "components/Engage";
import WorkList from "components/WorkList";

const Works = () => {
  const { error, isPending, data: works } = useFetch(
    "https://firestore.googleapis.com/v1/projects/ediboy-ilagan/databases/(default)/documents/works"
  );

  if (error) {
  }

  if (isPending) {
  }

  return (
    <section className="works container mx-auto max-w-screen-xl px-4 py-2">
      <div className="text-4xl font-medium mb-2">
        <span className="text-ediboy-primary">W</span>orks
      </div>

      <div className="text-xl font-thin mb-6 text-gray-200">
        Some works that I've done or involve in
      </div>
      {works && (
        <div>
          <WorkList works={works.documents} />
        </div>
      )}
      <Engage />
    </section>
  );
};

export default Works;
