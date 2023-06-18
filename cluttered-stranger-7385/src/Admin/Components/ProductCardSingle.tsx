import React from 'react'
import { Productss } from '../Pages/AllProducts'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


interface Props {
    el: Productss 
}

const ProductCardSingle = ({el}: Props) => {
  return (
    <DIV>
    <div id='maindiv'>

    <img src={el.image}/>
    <h2>{el.title}</h2>
    <div id='cat'>
        <h5>Category: {el.category}</h5>
        <h4>Color: {el.color}</h4>
    </div>
    <p>Desc: {el.description}</p>

    <div id='gender'>
    <h3>Price: ₹ {el.price}/-</h3>
    <h3>Gender: {el.gender}</h3>

    </div>
    
    </div>
</DIV>
  )
}

export default ProductCardSingle


const DIV = styled.div`

    

    #maindiv:hover {
        cursor: pointer;
         
    }

    #cat, #gender{
       width: 70%;
       display: flex;
       margin: auto;
       justify-content: space-between;
       font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande","Lucida Sans", Arial, sans-serif;
    }


    #button1{
        border: 1px solid;
        padding: 2px 15px;
        border-radius: 8px;
        margin-top: 5px;
        background-color: #283593;
        color: white;

    }
    #button2{
        border: 1px solid;
        padding: 2px 6px;
        border-radius: 8px;
        margin-top: 5px;
        background-color: #DD2C00;
        color: white;
    }

    #gender{

    }

    img{
        width: 100%;
        border-radius: 20px;
    }
    padding : 15px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;

`