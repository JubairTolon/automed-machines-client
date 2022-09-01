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
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import React, { createContext, useEffect } from "react";
import NotFound from "./Pages/Shared/NotFound";
import { addToDb, removeFromDb } from "./Utlities/SetToLocalStorage";
import useCart from "./Hooks/useCart";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/Dashboard/DashBoard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import DashboardContent from "./Pages/Dashboard/DashboardContent";
import MyReviews from "./Pages/Dashboard/MyReviews";
import AllProducts from "./Pages/Dashboard/AllProducts";
import ProductsReviews from "./Pages/Dashboard/ProductsReviews";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Users from "./Pages/Dashboard/Users";
import Orders from "./Pages/Dashboard/Orders";
import SingleOrder from "./Pages/Dashboard/SingleOrder";
import AnualAnalysis from "./Pages/Dashboard/AnualAnalysis";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { useQuery } from "react-query";
import Loading from "./Pages/Shared/Loading";

export const AddItemContext = createContext('handleAddToCartButton')
export const RemoveItemContext = createContext('handleRemoveCartItem')



function App() {
  const [user] = useAuthState(auth);
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = useCart(products);
  const [wishList, setWishList] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);


  //for get stored product from local storage
  // React.useEffect(() => {
  //   const storedCart = getStoredCart();
  //   const savedCart = [];
  //   for (const id in storedCart) {
  //     const addedProduct = products?.find(product => product._id == id);
  //     if (addedProduct) {
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       savedCart.push(addedProduct)
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);

  //cart calculation
  let subTotal = 0;
  let shippingCost = 0;
  let coupon = 300.204;
  let total = 0;
  let quantity = 0;


  cart?.map(product => {
    quantity = quantity + (product.quantity + product.minOrder);
    subTotal = subTotal + (product.price * (product.quantity + product.minOrder));
    shippingCost = shippingCost + product.shipping;
    total = (subTotal + shippingCost) - coupon;
    return [subTotal, shippingCost, total, quantity]
  })

  //product add to cart and database

  const handleAddToCartButton = (product) => {
    const exist = cart?.find(item => item._id === product._id)
    if (exist) {
      alert('This item already in cart !!!')
    }
    else {
      const newCart = [...cart, product]
      setCart(newCart)
      addToDb(product?._id)
    }
  }

  //product remove from cart and databse
  const handleRemoveCartItem = (product) => {
    const rest = cart?.filter(item => item._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  }

  //for find orders individual user
  const { data: orders, isLoading, refetch } = useQuery(['order', user], () =>
    fetch(`http://localhost:5000/userOrders?user=${user?.email}`)
      .then(res => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <AddItemContext.Provider value={handleAddToCartButton}>
      <AccessLink></AccessLink>
      <RemoveItemContext.Provider value={handleRemoveCartItem}>
        <Nav
          subTotal={subTotal}
          cart={cart}
        >
        </Nav>
      </RemoveItemContext.Provider>
      <Breadcrumb></Breadcrumb>
      <Routes>
        <Route path="/" element={
          <Home
            products={products}>
          </Home>}>
        </Route>
        <Route path="/aboutHome" element={<AboutHome></AboutHome>}></Route>
        <Route path="/aboutMore" element={<AboutMore></AboutMore>}></Route>
        <Route path="/reviewsHome" element={<ReviewsHome></ReviewsHome>}></Route>
        <Route path="/reviewsMain" element={<ReviewsMain></ReviewsMain>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/shop" element={
          <Shop
            products={products}>
          </Shop>}>
        </Route>
        <Route path="/productDetails/:productId" element={
          <SingleProductDeails
            products={products}>
          </SingleProductDeails>}>
        </Route>
        <Route path="/cart" element={
          <RequireAuth>
            <Cart
              subTotal={subTotal}
              total={total}
              cart={cart}
              handleRemoveCartItem={handleRemoveCartItem}>
            </Cart>
          </RequireAuth>
        }>
        </Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout
              quantity={quantity}
              total={total}
              cart={cart}
              setCart={setCart}>
            </Checkout>
          </RequireAuth>
        }>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>
        }>
          <Route index element={<DashboardContent></DashboardContent>} />
          <Route path="myOrders" element={<MyOrders
            orders={orders}
            refetch={refetch}
          ></MyOrders>} />
          <Route path='myReviews' element={<MyReviews></MyReviews>} />
          <Route path='allProducts' element={<AllProducts
            products={products}
          ></AllProducts>} />
          <Route path='productReviews' element={<ProductsReviews></ProductsReviews>} />
          <Route path='addProduct' element={<AddProduct></AddProduct>} />
          <Route path='users' element={<Users></Users>} />
          <Route path='orders' element={<Orders></Orders>} />
          <Route path='anualAnalysis' element={<AnualAnalysis></AnualAnalysis>} />
        </Route>
        <Route path='/singleOrder/:orderId' element={<SingleOrder
          orders={orders}
        ></SingleOrder>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </AddItemContext.Provider>
  );
}

export default App;
