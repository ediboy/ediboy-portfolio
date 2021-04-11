import coding from "assets/images/coding.png";

const About = () => {
  return (
    <section className="about container mx-auto max-w-screen-xl px-4 pt-20">
      <div className="text-4xl font-medium mb-6">
        <span className="text-ediboy-primary">P</span>rogrammer{" "}
        <span className="text-ediboy-primary">G</span>amer{" "}
        <span className="text-ediboy-primary">T</span>raveller{" "}
        <span className="text-ediboy-primary">F</span>renchie Lover{" "}
      </div>

      <div className="text-lg font-thin text-gray-400">
        I design and code web and mobile applications. I love to travel with my
        wife and play with my french bulldog.
      </div>

      <div className="flex justify-center mt-10">
        <div className="max-w-sm">
          <img src={coding} alt="coding" />
        </div>
      </div>
    </section>
  );
};

export default About;
