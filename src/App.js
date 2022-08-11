import { } from "./App.css";
import AccessLink from "./Pages/Shared/AccessLink";
import { Routes, Route } from "react-router-dom";
import Breadcrumb from './Pages/Shared/Breadcrumb';
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Nav";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
// import wheel from './Assets/wheel.png'
function App() {
  return (
    <div>
      <AccessLink></AccessLink>
      <Nav></Nav>
      <Breadcrumb></Breadcrumb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
