import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar flex justify-between p-2 container mx-auto max-w-screen-xl px-4">
      <Link to="/">
        <div className="logo">
          <img className="w-16" src={logo} alt="logo" />
        </div>
      </Link>

      <div className="menu flex my-auto">
        <Link to="/works">
          <div className="p-3 text-ediboy-primary border-">
            <FontAwesomeIcon icon="code" />
          </div>
        </Link>

        <Link to="/contact">
          <div className="p-3 text-ediboy-primary border-">
            <FontAwesomeIcon icon="envelope" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
