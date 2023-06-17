import React from 'react'
import {Link} from "react-router-dom"
import { styled } from 'styled-components'

const SideBar = () => {
  return (
    <DIV>
        <div id='div1'>
        <Link to={'/AllProducts'}>AllProducts</Link><br/>
        <Link to={'/Shirts'}>Shirts</Link><br/>
        <Link to={'/Kurtas'}>Kurtas</Link><br/>
        <Link to={'/Dress-Material'}>Dress-Material</Link><br/>
        <Link to={'/Sarees'}>Sarees</Link><br/>
        <Link to={'/Jeans'}>Jeans</Link><br/>
        <Link to={'/Shoes'}>Shoes</Link><br/>
        <Link to={'/Sandals'}>Sandals</Link><br/>
        </div>
    </DIV>
  )
}

export default SideBar


const DIV = styled.div`
#div1{
    border: 2px solid;
    width : 15%;
    margin-left: 50px;
}

`