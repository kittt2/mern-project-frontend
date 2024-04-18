import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/cart.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Policy from './pages/Policy.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'
import { createContext } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login.jsx'
import { Context } from './context/Context.jsx'
import Signin from './pages/auth/Signin.jsx'
import Createcategory from './pages/admin/Createcategory.jsx'
import Createproduct from './pages/admin/Createproduct.jsx'
import Dashboard from './pages/USER/Dashboard.jsx';
import Private from './components/Route/Private.jsx'
import Forgetpassword from './pages/auth/Forgetpassword.jsx'
import Adminroute from './components/Route/Adminroute.jsx'
import Admin from './pages/admin/Admin.jsx'
import Users from './pages/admin/Users.jsx'
import Products from './pages/admin/Products.jsx'
import UpdateProduct from './pages/admin/Updateproduct.jsx'
import HomePage from './pages/HomePage.jsx'
import { SearchProvider } from "./context/search.jsx";
import ProductDetails from "./pages/ProductDetails.jsx"
import Categories from './pages/Categories.jsx'
import CartPage from './pages/CartPage.jsx'
import CategoryProduct from './pages/CategoryProduct.jsx'
import Search from './pages/Search.jsx'
import Orders from './pages/USER/Orders.jsx'
import AdminOrders from './pages/admin/AdminOrder.jsx'
import Profile from './pages/USER/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path='/shop' element={<HomePage />}></Route>
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:slug" element={<CategoryProduct />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<Private />}>
        <Route path='user' element={<Dashboard />} />
        <Route path="user/orders" element={<Orders />} />
        <Route path="user/profile" element={<Profile />} />
      </Route>

      <Route path="/dashboard" element={<Adminroute />}>
        <Route path='admin' element={<Admin />} />
        <Route path="admin/create-category" element={<Createcategory />} />
        <Route path="admin/create-product" element={<Createproduct />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/orders" element={<AdminOrders />} />
      </Route>




      <Route path="/about" element={<About value="about" />} />
      <Route path="/forget-password" element={<Forgetpassword />} />
      <Route path="/contact" element={<Contact value="contact" />} />
      <Route path="/policy" element={<Policy value="policy" />} />
      <Route path="/register" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const child = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(

  <Context>
    <SearchProvider>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
      
    </SearchProvider>

  </Context>

)
