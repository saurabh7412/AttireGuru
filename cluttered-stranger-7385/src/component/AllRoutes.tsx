import { Routes ,Route} from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignupCard from "../Pages/Signup";
import AddtocartPage from "../Pages/AddtocartPage";
import SingleProduct from "../Pages/SingleProductPage";


export default function AllRoutes(){



return <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/product" element={<ProductPage/>}/>
<Route path="/product/:id" element={<SingleProduct/>}/>
<Route path="/cart" element={<AddtocartPage/>}/>
<Route path="/payment" element={<h1>paymentPage</h1>}/>
<Route path="/admin" element={<h1>AdminPage</h1>}/>
<Route path="*" element={<h1>PageNotFound</h1>}/>
<Route path="/signup" element={<SignupCard/>}/>

   </Routes>
}