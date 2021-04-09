import Nav from "components/Nav";
import About from "components/About";
import Intro from "components/Intro";
import Skills from "components/Skills";
import Works from "components/Works";
import Clients from "components/Clients";
import Testimonials from "components/Testimonials";
import Engage from "components/Engage";

const Home = () => {
  return (
    <div className="home">
      {/* header */}
      <Nav />

      {/* about section */}
      <About />

      {/* intro section */}
      <Intro />

      {/* skills section */}
      <Skills />

      {/* works section */}
      <Works />

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
