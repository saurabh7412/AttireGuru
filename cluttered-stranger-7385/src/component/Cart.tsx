import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Iproduct, RootState } from '../Constraints/Type';
import { useSelector } from 'react-redux';
import { Skeleton } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';


const ItemImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ItemTitle = styled.h4`
  margin: 10px 0;
  font-size: 16px;
`;

const ItemPrice = styled.p`
  margin-bottom: 10px;
  color: orange;
`;

const OfferText = styled.span`
  position: absolute;
  border-radius: 10px;
  top: 5px;
  left: 5px;
  color:gold;
  background-color: #283593;
  padding: 5px;
  font-size: 10px;
  font-weight: bold;
`;


const CartContainer = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

transition: opacity 0.5s ease-in-out;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  margin: 5px 5px;
  font-size: 14px;
  cursor: pointer;
color :orange;
border:1px solid orange;
border-radius:10px;
font-size:11px;
  &:hover {
    border:none;
    border-radius:10px;
    
    background-color: white;
    color:black;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${CartContainer}:hover & {
    opacity: 1;
  }
`;

export default function Cart(props: Iproduct) {
  const { image, title, price, offer, id }=props;
    const [showButtons, setShowButtons] = useState(false);
   
    const handleMouseEnter = () => {
      setShowButtons(true);
    };
  
    const handleMouseLeave = () => {
      setShowButtons(false);
    };
  
    const handleAddToCart = () => {
      const cartItem = props;

      const cartItems = JSON.parse(localStorage.getItem('AddedToCart') || '[]');
          const alreadyprasent= cartItems.find((item:Iproduct) => item.id === cartItem.id);
          if(alreadyprasent){
        toast.warn("Already present in the cart")
          }else{
            cartItems.push({...cartItem,quantity:1});
            localStorage.setItem('AddedToCart', JSON.stringify(cartItems));
            toast.success(`${cartItems.length} Item added to cart`);
          }
      // cartItem.quantity=1;
        //  const cartItems = JSON.parse(localStorage.getItem('AddedToCart') || '[]');
        //  cartItems.push({...cartItem,quantity:1});
        //  localStorage.setItem('AddedToCart', JSON.stringify(cartItems));
        // //  alert(`${cartItems.length+1} Item added to cart`);
        // toast.success(`${cartItems.length} Item added to cart`)
    };
    
   
  return (
    <CartContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       <Overlay />
       <ToastContainer/>
      <ItemImage src={image} alt={title} />
    <ItemTitle>{title}</ItemTitle>
      <ItemPrice> ₹ {price}</ItemPrice>
       <OfferText>{offer}</OfferText>
      {showButtons && (
        <ButtonContainer>
          <Button onClick={handleAddToCart}>ADD TO CART</Button>
          <Button as={Link} to={`/product/${id}`}>SEE DETAILS</Button>
        </ButtonContainer>
      )}
    </CartContainer>
  );
}
