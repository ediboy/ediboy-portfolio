import Home from "pages/Home";
import Works from "pages/Works";
import Contact from "pages/Contact";
import NotFound from "pages/NotFound";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faEnvelope,
  faTools,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "components/Nav";

library.add(faCode, faEnvelope, faTools, faMugHot);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-ediboy-bg text-white text-center font-ubuntu">
        {/* header */}
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
