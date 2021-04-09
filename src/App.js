import Home from "./pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faEnvelope,
  faTools,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCode, faEnvelope, faTools, faMugHot);

function App() {
  return (
    <div className="App min-h-screen bg-ediboy-bg text-white text-center font-ubuntu">
      <Home />
    </div>
  );
}

export default App;
