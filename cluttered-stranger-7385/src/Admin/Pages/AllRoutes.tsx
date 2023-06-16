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

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/edit/:id' element={<EditProduct/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Orders' element={<Orders/>}/>
            <Route path='/Dashboard' element={<DashBoard/>}/>
            <Route path='/AllProducts' element={<AllProducts/>}/>
            <Route path='/Shirts' element={<Shirts/>}/>
            <Route path='/Kurtas' element={<Kurtas/>}/>
            <Route path='/Dress-Material' element={<DressMaterial/>}/>
            <Route path='/Sarees' element={<Sarees/>}/>
            <Route path='/Jeans' element={<Jeans/>}/>
            <Route path='/Shoes' element={<Shoes/>}/>
            <Route path='/Sandals' element={<Sandals/>}/>
            <Route path='/AddProduct' element={<AddProduct/>}/>



        </Routes>
    </div>
  )
}

export default AllRoutes