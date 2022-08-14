import { } from "./App.css";
import AccessLink from "./Pages/Shared/AccessLink";
import { Routes, Route } from "react-router-dom";
import Breadcrumb from './Pages/Shared/Breadcrumb';
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Nav";
import Login from "./Pages/Login/Login";
import AboutMore from "./Pages/About/AboutMore";
import ReviewsHome from "./Pages/Reviews/ReviewsHome";
import Shop from "./Pages/Shop/Shop";
import ReviewsMain from "./Pages/Reviews/ReviewsMain";
function App() {
  return (
    <div>
      <AccessLink></AccessLink>
      <Nav></Nav>
      <Breadcrumb></Breadcrumb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutMore" element={<AboutMore></AboutMore>}></Route>
        <Route path="/reviewsHome" element={<ReviewsHome></ReviewsHome>}></Route>
        <Route path="/reviewsMain" element={<ReviewsMain></ReviewsMain>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
