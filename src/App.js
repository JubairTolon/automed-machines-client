import { } from "./App.css";
import AccessLink from "./Pages/Shared/AccessLink";
import { Routes, Route } from "react-router-dom";
import Breadcrumb from './Pages/Shared/Breadcrumb';
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Nav";
import Login from "./Pages/Login/Login";
import ReviewsHome from "./Pages/Reviews/ReviewsHome";
import Shop from "./Pages/Home/Shop";
import ReviewsMain from "./Pages/Reviews/ReviewsMain";
import Footer from "./Pages/Shared/Footer";
import AboutHome from "./Pages/Home/AboutHome";
import Contact from "./Pages/Contact/Contact";
import SingleProductDeails from "./Pages/SingleProductDetails/SingleProductDeails";
import AboutMore from "./Pages/About/AboutMore";
import SignUp from "./Pages/Login/SignUp";
import Cart from "./Pages/Home/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import React from "react";
import NotFound from "./Pages/Shared/NotFound";



function App() {

  const [products, setProducts] = React.useState([]);
  const url = 'Products.json';
  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const [cart, setCart] = React.useState([])

  const handleAddToCartButton = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  }
  return (
    <div>
      <AccessLink></AccessLink>
      <Nav></Nav>
      <Breadcrumb></Breadcrumb>
      <Routes>
        <Route path="/" element={<Home
          products={products}
          handleAddToCartButton={handleAddToCartButton}
        ></Home>}></Route>
        <Route path="/aboutHome" element={<AboutHome></AboutHome>}></Route>
        <Route path="/aboutMore" element={<AboutMore></AboutMore>}></Route>
        <Route path="/reviewsHome" element={<ReviewsHome></ReviewsHome>}></Route>
        <Route path="/reviewsMain" element={<ReviewsMain></ReviewsMain>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/shop" element={
          <Shop
            products={products}
            handleAddToCartButton={handleAddToCartButton}>
          </Shop>}>
        </Route>
        <Route path="/productDetails/:productId" element={<SingleProductDeails
          products={products}
        ></SingleProductDeails>}></Route>
        <Route path="/cart" element={<Cart
          cart={cart}
        ></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
