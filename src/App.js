import { } from "./App.css";
import AccessLink from "./Pages/Shared/AccessLink";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Nav";
// import wheel from './Assets/wheel.png'
function App() {
  return (
    <div className="">
      <AccessLink></AccessLink>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
