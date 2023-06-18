import React from 'react'
import { styled } from 'styled-components'
import users from "../Images/user.png";
import { Button } from '@chakra-ui/react';



interface Users {
    el: any
 }

const OrdersCard = ({el}:Users) => {
    function randomDate(start:any, end:any){
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      
      const d = randomDate(new Date(2023, 5, 18), new Date(2023,5,28));
  return (
    <DIV>
    <div className='maindiv'>
    <img  src={el.image || users} />

    <div className='datadiv'>
    <h1><span>Username: </span>{el.username}</h1>
    <h2><span>Product Ordered: </span> {el.title || "Product"}</h2>
    <h1><span>Address: </span>{el.address}</h1>
    <h1><span>Mobile: </span>{el.mobile}</h1>
    <h1><span>Product Price: </span>{el.price}</h1>
    <h1><span>Expected Delivery: </span>{d.toString()}</h1>
    </div>

    <div className='btndiv' >
    <Button className='btn'>Edit</Button>

    <Button className='btn'>Delete</Button>
    </div>
    </div>
</DIV>
  )
}

export default OrdersCard


const DIV = styled.div`

.maindiv{
    // border: 1px solid;
    width: 25%;
    padding: 30px;
    margin-top:30px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
    
    
}

.datadiv {
    text-align: start;
    
}
span{
    font-weight: bold;
    color: #5c6bc0;
}

h1{
    padding-top:10px;
}
.btndiv{
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-top:30px;
}

.btn:hover{
    background-color: red;
    color: white;
}

img{
    width: 100%;
    border-radius: 50%;
}


`