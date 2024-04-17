import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import About from "./components/About";
import Notfound from "./components/Error"

import Newnav from "./components/Newnav";
function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  return (
    <div>
     
      <Router>
        <Newnav/>
         {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
