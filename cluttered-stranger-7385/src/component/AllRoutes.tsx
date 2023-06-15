import { Routes ,Route} from "react-router-dom";
import ProductPage from "../Pages/ProductPage";

export default function AllRoutes(){



return <Routes>
<Route path="/" element={<h1>homePage</h1>}/>
<Route path="/login" element={<h1>LoginPage</h1>}/>
<Route path="/product" element={<ProductPage/>}/>
<Route path="/product/:id" element={<h1>SingleProductPage</h1>}/>
<Route path="/cart" element={<h1>CartPage</h1>}/>
<Route path="/payment" element={<h1>paymentPage</h1>}/>
<Route path="/admin" element={<h1>AdminPage</h1>}/>
<Route path="*" element={<h1>PageNotFound</h1>}/>

   </Routes>
}