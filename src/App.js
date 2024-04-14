import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container"

function App() {
  return (
    <Router>
      <Navbar/>

      <Container classNome="min_heigth">
        <Routes>
          <Route index exect path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
