import geLogo from "assets/images/ge.png";
import miyensLogo from "assets/images/miyens.png";
import vsaLogo from "assets/images/vsa.png";

const Clients = () => {
  return (
    <section className="clients container mx-auto max-w-screen-xl px-4 py-20">
      <div className="text-3xl font-medium">Clients</div>
      <div className="text-xl font-thin mb-5 text-gray-400">
        awesome clients I worked with
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-5 md:gap-8 items-end max-w-xl">
          <img src={miyensLogo} alt="miyens" />
          <img src={geLogo} alt="ge" />
          <img src={vsaLogo} alt="vsa" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
