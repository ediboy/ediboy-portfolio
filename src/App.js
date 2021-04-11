import Home from "pages/Home";
import Works from "pages/Works";
import Contact from "pages/Contact";
import NotFound from "pages/NotFound";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faTools,
  faMugHot,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "components/Nav";

library.add(faCode, faEnvelope, faTools, faMugHot, fab, faHourglassStart);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-ediboy-bg text-white text-center font-ubuntu bg-pattern">
        {/* header */}
        <Nav />
        <Switch>
          <Route exact path="/ediboy-portfolio">
            <Home />
          </Route>
          <Route exact path="/ediboy-portfolio/works">
            <Works />
          </Route>
          <Route exact path="/ediboy-portfolio/contact">
            <Contact />
          </Route>
          <Route exact path="/ediboy-portfolio/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
