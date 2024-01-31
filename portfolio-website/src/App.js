import "./App.css";
import Header from "./Component/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import Projects from "./Component/Projects";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
