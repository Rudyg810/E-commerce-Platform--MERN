import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import About from "./pages/about";
import SeachResults from "./pages/Searchresults";
import Policy from "./pages/Policy";
import Contact from "./pages/contact";
import Errorpage from "./pages/pageerror";
import Header from "./header";
import Footer from "./footer";
import Admindash from "./pages/admin/Admin_dash";

import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import "./pages/auth/auth.css"
import "./App.css"
import userdash from "./pages/user/user_dash";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import PrivateRoute from "./Routes/private";
import AdminRoute from "./Routes/adminprivateroute";
import CreateCateogary from "./pages/admin/createcateogary";
import CreateProduct from "./pages/admin/createproduct";
import CreateUsers from "./pages/admin/users";
import Userdash from "./pages/user/user_dash";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Product from "./pages/admin/Product";
import UpdateProduct from "./pages/admin/updateProduct";
import Productdetails from "./pages/productdetails";
function App() {

 
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<Productdetails />} />
      <Route path="/search" element={<SeachResults />} />
        <Route path="register/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        //nested 
        <Route path="/Dashboard" element={<PrivateRoute />} >
          <Route path="" element={<Userdash />} />
          <Route path="user/cart" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />

       </Route>
        
       <Route path="/Dashboard" element={<AdminRoute />} >   
       <Route path="admin" element={<Admindash />} />
       <Route path="admin/update-product/:slug" element={<UpdateProduct />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/create-cateogary" element={<CreateCateogary />} />
          <Route path="admin/create-users" element={<CreateUsers />} />    
                <Route path="admin/product" element={<Product />} />

       </Route>


       <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>

      <Footer />
      <ToastContainer
position='top-right'
autoClose={1000}
/>

    </>
  );
}

export default App;
