import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const CartItemContainer = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 200px;
  margin: 10px;
  .button-class:hover{
background:white;
color:black;
  }
`;

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
  color:orange;

`;

const OfferText = styled.span`
  position: absolute;
  border-radius: 10px;
  top: 5px;
  left: 5px;
  background-color: #fff;
  padding: 5px;
  font-size: 10px;
  font-weight: bold;
`;

const ButtonContainer = styled.div<{ showButtons: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  
`;

const TransparentButton = styled.button`
  background-color: transparent;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  font-size: 12px;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BlurBackground = styled.div<{ showButtons: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: tranparent;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  ${props =>
    props.showButtons &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

interface CartItemProps {
  image: string;
  title: string;
  price: string;
  offer: string;
}

export default function Cart ({ image, title, price, offer }:CartItemProps) {
  const [showButtons, setShowButtons] = useState(false);

  return (

    <CartItemContainer
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <BlurBackground showButtons={showButtons} />
      <ItemImage src={image} alt={title} />
      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>{price}</ItemPrice>
      <OfferText>{offer}</OfferText>
      <ButtonContainer showButtons={showButtons} >
        <TransparentButton className="button-class">Show Details</TransparentButton>
        <TransparentButton>Add to Cart</TransparentButton>
      </ButtonContainer>
    </CartItemContainer>
  );
};