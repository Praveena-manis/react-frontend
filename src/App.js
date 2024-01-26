import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/dashboard";
import PrivateRoute from "./components/routes/privateRoute";
import AdminRoute from "./components/routes/admin";
import AdminDashboard from "./pages/Admin/adminDashboard";
import CreateCategory from "./pages/Admin/createcategory";
import AddProduct from "./pages/Admin/addproduct";
import Products from "./pages/Admin/product";
import 'react-toastify/dist/ReactToastify.css';//used react-toastify css file for displaying toast messages
import UpdateProduct from "./pages/Admin/updateProduct";
import Home from './pages/user/home';
import ProductDetails from "./pages/user/productdetails";
import CartPage from "./pages/cartpage";
import Profile from "./pages/user/profile";
import Orders from './pages/user/orders';
import AdminOrders from "./pages/Admin/adminorders";
import Register from "./pages/Auth/Register";
function App() {
  return (
    <>
   <div className="App">{/*used routes for various pages and created dashboard from private route for admin and user */}
   <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
        <Route path="/cartpage" element={<CartPage/>}/>
        <Route path="/allproducts" element={<Products/>}/>
        <Route path="/dashboard/*" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard/*" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/createcategory" element={<CreateCategory />} />
          <Route path="admin/addproduct" element={<AddProduct />} />
          <Route path="admin/allproducts" element={<Products/>}/>
          <Route path="admin/updateproduct/:id" element={<UpdateProduct/>}/>
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </div>
      
    </>
  );
}

export default App;