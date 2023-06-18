import React from 'react'

import {Routes,Route} from "react-router-dom";
import DashBoard from './DashBoard';
import AllProducts from './AllProducts';
import Shirts from './Shirts';
import Kurtas from './Kurtas';
import DressMaterial from './DressMaterial';
import Sarees from './Sarees';
import Jeans from './Jeans';
import Shoes from './Shoes';
import Sandals from './Sandals';
import Login from './Login';
import Users from './Users';
import Orders from './Orders';
import EditProduct from '../Components/EditProduct';
import AddProduct from './AddProduct';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/edit/:id' element={<EditProduct/>}/>
            <Route path='/Users' element={<PrivateRoute><Users/></PrivateRoute>}/>
            <Route path='/Orders' element={<PrivateRoute><Orders/></PrivateRoute>}/>
            <Route path='/Dashboard' element={<PrivateRoute><DashBoard/></PrivateRoute>}/>
            <Route path='/AllProducts' element={<PrivateRoute><AllProducts/></PrivateRoute>}/>
            <Route path='/Shirts' element={<PrivateRoute><Shirts/></PrivateRoute>}/>
            <Route path='/Kurtas' element={<PrivateRoute><Kurtas/></PrivateRoute>}/>
            <Route path='/Dress-Material' element={<PrivateRoute><DressMaterial/></PrivateRoute>}/>
            <Route path='/Sarees' element={<PrivateRoute><Sarees/></PrivateRoute>}/>
            <Route path='/Jeans' element={<PrivateRoute><Jeans/></PrivateRoute>}/>
            <Route path='/Shoes' element={<PrivateRoute><Shoes/></PrivateRoute>}/>
            <Route path='/Sandals' element={<PrivateRoute><Sandals/></PrivateRoute>}/>
            <Route path='/AddProduct' element={<PrivateRoute><AddProduct/></PrivateRoute>}/>



        </Routes>
    </div>
  )
}

export default AllRoutes