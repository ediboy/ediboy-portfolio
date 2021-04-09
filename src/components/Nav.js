import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="navbar flex justify-between py-2 container mx-auto max-w-screen-xl px-4">
      <div className="logo">
        <img className="w-16" src={logo} />
      </div>
      <div className="menu flex my-auto">
        <div className="px-5 py-2 text-ediboy-primary border-">
          <FontAwesomeIcon icon="code" />
        </div>
        <div className="px-5 py-2 text-ediboy-primary border-">
          <FontAwesomeIcon icon="envelope" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
