import About from "components/About";
import Intro from "components/Intro";
import Skills from "components/Skills";
import FeaturedWorks from "components/FeaturedWorks";
import Clients from "components/Clients";
import Testimonials from "components/Testimonials";
import Engage from "components/Engage";

const Home = () => {
  return (
    <div className="home">
      {/* about section */}
      <About />

      {/* intro section */}
      <Intro />

      {/* skills section */}
      <Skills />

      {/* works section */}
      <FeaturedWorks />

      {/* clients section */}
      <Clients />

      {/* testimonial section */}
      <Testimonials />

      {/* engage section */}
      <Engage />
    </div>
  );
};

export default Home;
