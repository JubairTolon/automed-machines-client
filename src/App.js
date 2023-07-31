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
import React, { createContext } from "react";
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
import Users from "./Pages/Dashboard/Users";
import Orders from "./Pages/Dashboard/Orders";
import SingleOrder from "./Pages/Dashboard/SingleOrder";
import AnualAnalysis from "./Pages/Dashboard/AnualAnalysis";
import SingleAdminOrder from "./Pages/Dashboard/SingleAdminOrder";
import Message from "./Pages/Dashboard/Message";
import MyMessages from "./Pages/Dashboard/MyMessages";
import SingleProductReviews from "./Pages/Dashboard/SingleProductReviews";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Subscriptions from "./Pages/Dashboard/Subscriptions";
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import useLoadReviews from "./Hooks/useLoadReviews";
import useLoadProduct from "./Hooks/useLoadProduct";
import Payment from "./Pages/Dashboard/Payment";
import { useState } from "react";
import UpdateProduct from "./Pages/Dashboard/UpdateProduct";
import Profile from "./Pages/Shared/Profile";
import Features from "./Features/Features";
import Blogs from "./Blogs/Blogs";

export const AddItemContext = createContext('handleAddToCartButton')
export const RemoveItemContext = createContext('handleRemoveCartItem')

function App() {

  const { reviews } = useLoadReviews();
  const { products, isLoading, refetch } = useLoadProduct(reviews);

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearch(searchTerm);
    if (search !== '') {
      const newList = products?.filter(product => {
        return Object.values(product)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      })
      setSearchResult(newList);
    }
    else {
      setSearchResult(products);
    }
  }

  //for mainain cart 
  const [cart, setCart, subTotal, total, quantity] = useCart(products);

  // const [wishList, setWishList] = React.useState([]);

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

  return (
    <AddItemContext.Provider value={handleAddToCartButton}>
      {/* <AccessLink></AccessLink> */}
      <RemoveItemContext.Provider value={handleRemoveCartItem}>
        <Nav
          products={products}
          subTotal={subTotal}
          cart={cart}
        >
        </Nav>
      </RemoveItemContext.Provider>
      {/* <Breadcrumb></Breadcrumb> */}

      <Routes>
        <Route path="/" element={
          <Home
            products={products}>
          </Home>}>
        </Route>

        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/aboutHome" element={<AboutHome></AboutHome>}></Route>
        <Route path="/aboutMore" element={<AboutMore></AboutMore>}></Route>
        <Route path="/reviewsHome" element={<ReviewsHome></ReviewsHome>}></Route>
        <Route path="/reviewsMain" element={<ReviewsMain></ReviewsMain>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/shop" element={
          <Shop
            isLoading={isLoading}>
          </Shop>}>
        </Route>

        <Route path="/blogs" element={
          <Blogs></Blogs>}>
        </Route>
        <Route path="/features" element={
          <Features></Features>}>
        </Route>

        <Route path="/productDetails/:pId" element={
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
          </RequireAuth>}>
        </Route>

        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout
              quantity={quantity}
              total={total}
              cart={cart}
              setCart={setCart}>
            </Checkout>
          </RequireAuth>}>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="/dashboard" element={<DashBoard></DashBoard>}>
          <Route index element={<DashboardContent></DashboardContent>} />

          <Route path="myOrders" element={<MyOrders></MyOrders>} />
          <Route path='payment/:id' element={<Payment></Payment>} />

          <Route path='/dashboard/myOrders/singleOrder/:orderId' element={<SingleOrder></SingleOrder>}></Route>

          <Route path='myReviews' element={<MyReviews></MyReviews>} />

          <Route path='allProducts' element={
            <RequireAdmin>
              <AllProducts
                products={search < 1 ? products : searchResult}
                search={search}
                searchHandler={searchHandler}
                refetch={refetch}
                isLoading={isLoading}
              ></AllProducts>
            </RequireAdmin>} />

          <Route path='productReviews' element={
            <RequireAdmin>
              <ProductsReviews></ProductsReviews>
            </RequireAdmin>} />

          <Route path='/dashboard/productReviews/singleProductReviews/:pId' element={
            <RequireAdmin>
              <SingleProductReviews></SingleProductReviews>
            </RequireAdmin>} />

          <Route path='add' element={
            <RequireAdmin>
              <AddAProduct refetch={refetch}></AddAProduct>
            </RequireAdmin>} />

          <Route path='manageProduct' element={
            <RequireAdmin>
              <ManageProduct
                products={search < 1 ? products : searchResult}
                search={search}
                searchHandler={searchHandler}
                refetch={refetch}>
              </ManageProduct>
            </RequireAdmin>} />

          <Route path='/dashboard/manageProduct/updateProduct/:pId' element={<RequireAdmin><UpdateProduct></UpdateProduct></RequireAdmin>} />
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} />

          <Route path='orders' element={
            <RequireAdmin>
              <Orders></Orders>
            </RequireAdmin>} />

          <Route path='/dashboard/orders/singleAdminOrder/:orderId' element={
            <RequireAdmin>
              <SingleAdminOrder></SingleAdminOrder>
            </RequireAdmin>} />

          <Route path='Subscription' element={
            <RequireAdmin>
              <Subscriptions></Subscriptions>
            </RequireAdmin>} />
          <Route path='message' element={
            <RequireAdmin>
              <Message></Message>
            </RequireAdmin>} />

          <Route path='myMessage' element={<MyMessages></MyMessages>} />

          <Route path='anualAnalysis' element={
            <RequireAdmin>
              <AnualAnalysis></AnualAnalysis>
            </RequireAdmin>} />
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </AddItemContext.Provider>
  );
}

export default App;
