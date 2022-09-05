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
import AddProduct from "./Pages/Dashboard/AddProduct";
import Users from "./Pages/Dashboard/Users";
import Orders from "./Pages/Dashboard/Orders";
import SingleOrder from "./Pages/Dashboard/SingleOrder";
import AnualAnalysis from "./Pages/Dashboard/AnualAnalysis";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { useQuery } from "react-query";
import SingleAdminOrder from "./Pages/Dashboard/SingleAdminOrder";
import Message from "./Pages/Dashboard/Message";
import MyMessages from "./Pages/Dashboard/MyMessages";
import SingleProductReviews from "./Pages/Dashboard/SingleProductReviews";

export const AddItemContext = createContext('handleAddToCartButton')
export const RemoveItemContext = createContext('handleRemoveCartItem')



function App() {
  const [user] = useAuthState(auth);
  const { data: products, isLoading } = useQuery('product', () =>
    fetch('http://localhost:5000/product')
      .then(res => res.json())
  )

  const [cart, setCart] = useCart(products);
  // const [wishList, setWishList] = React.useState([]);

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

  //for load all orders
  const { data: allOrders } = useQuery('order', () =>
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
  );

  //for find orders individual user
  const { data: orders, refetch } = useQuery(['order', user], () =>
    fetch(`http://localhost:5000/userOrders?user=${user?.email}`)
      .then(res => res.json())
  )

  //for load all product reviews
  const { data: reviews } = useQuery('review', () =>
    fetch('http://localhost:5000/productReview')
      .then(res => res.json())
  )

  const updatedProducts = products?.map(p => {
    let totalRatings = 0;
    const sprs = reviews?.filter(r => r.productId === p._id);
    sprs?.map(element => totalRatings = totalRatings + element.rating);
    let rating = Math.round(totalRatings / sprs?.length);
    if (isNaN(rating)) {
      p.rating = 0;
    }
    else {
      p.rating = rating;
    }
    return p;
  })
  console.log(updatedProducts)



  // if (isLoading) {
  //   return <Loading></Loading>
  // }



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
            products={updatedProducts}>
          </Home>}>
        </Route>
        <Route path="/aboutHome" element={<AboutHome></AboutHome>}></Route>
        <Route path="/aboutMore" element={<AboutMore></AboutMore>}></Route>
        <Route path="/reviewsHome" element={<ReviewsHome></ReviewsHome>}></Route>
        <Route path="/reviewsMain" element={<ReviewsMain></ReviewsMain>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/shop" element={
          <Shop
            products={updatedProducts}>
          </Shop>}>
        </Route>
        <Route path="/productDetails/:pId" element={
          <SingleProductDeails
            products={updatedProducts}
            reviews={reviews}
          >
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
          <DashBoard />
        }>
          <Route index element={<DashboardContent></DashboardContent>} />
          <Route path="myOrders" element={<MyOrders
            orders={orders}
          ></MyOrders>} />
          <Route path='/dashboard/myOrders/singleOrder/:orderId' element={<SingleOrder
            orders={orders}
          ></SingleOrder>}></Route>
          <Route path='myReviews' element={<MyReviews></MyReviews>} />
          <Route path='allProducts' element={<AllProducts
            products={updatedProducts}
          ></AllProducts>} />
          <Route path='productReviews' element={<ProductsReviews
            reviews={reviews}
            isLoading={isLoading}
          ></ProductsReviews>} />
          <Route path='/dashboard/productReviews/singleProductReviews/:pId' element={<SingleProductReviews
            reviews={reviews}
          ></SingleProductReviews>} />
          <Route path='addProduct' element={<AddProduct></AddProduct>} />
          <Route path='users' element={<Users></Users>} />
          <Route path='orders' element={<Orders
            allOrders={allOrders}
            refetch={refetch}
          ></Orders>} />
          <Route path='/dashboard/orders/singleAdminOrder/:orderId' element={<SingleAdminOrder
            allOrders={allOrders}
          ></SingleAdminOrder>} />
          <Route path='message' element={<Message
          ></Message>} />
          <Route path='myMessage' element={<MyMessages></MyMessages>} />
          <Route path='anualAnalysis' element={<AnualAnalysis></AnualAnalysis>} />
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </AddItemContext.Provider>
  );
}

export default App;
