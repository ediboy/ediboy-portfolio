import geLogo from "assets/images/ge.png";
import miyensLogo from "assets/images/miyens.jpeg";
import vsaLogo from "assets/images/vsa.svg";

const Clients = () => {
  return (
    <section className="clients container mx-auto max-w-screen-xl px-4 py-20">
      <div className="text-3xl font-medium">Clients</div>
      <div className="text-xl font-thin mb-5 text-gray-200">
        Awesome clients I worked with
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src={miyensLogo} />
        </div>
        <div>
          <img src={geLogo} />
        </div>
        <div>
          <img src={vsaLogo} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
