
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Iproduct } from '../Constraints/Type';
import { getProducts } from '../Redux/ProductReducer/action';
import { Dispatch } from 'redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface IParams {
  id: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin:auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
  }
`;

const ProductImage = styled.img`
  width: 110%;
  padding:20px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  margin-top:80px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left:125px;
  }
`;

const ProductInfo = styled.div`
  width:650px;
  margin-left:100px;
  padding: 10px 30px;
  text-align: start;
  margin-top:80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  @media (max-width: 768px) {
    
    margin-left:50px;
  }
`;

const ProductName = styled.h2`
  margin-top: 100px;

  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #777;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #555;
`;

const SizeButton = styled.button`
  padding: 10px 20px;
  margin: 20px 5px 50px 5px;
  
  font-size: 10px;
  color: black;
  background-color: lightblue;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #283593;
  }
`;

const AddToCartButton = styled.button`
  
  width:100%;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #283593;
  border: none;
  border-radius: 4px;
  cursor: pointer;

 
`;

const DiscountLabel = styled.span`
  color: black;
  background-color: #ffff00;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom:30px;
`;
const ProductRating = styled.div`
   display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top:20px;
 `;
export default function SingleProduct() {
  const param = useParams<any>();
  const {id}=param;
  console.log(id)
  const products = useSelector((store: any) => store.ProductReducer.product);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (!product) {
    dispatch(getProducts({params:{id}}));
  }
  }, []);

  const product = products.find((item: Iproduct) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {

     const cartItem = product;
    const cartItems = JSON.parse(localStorage.getItem('AddedToCart') || '[]');
        const alreadyprasent= cartItems.find((item:Iproduct) => item.id === cartItem.id);
        if(alreadyprasent){
      toast.warn("Already present in the cart")
        }else{
          cartItems.push({...cartItem,quantity:1});
          localStorage.setItem('AddedToCart', JSON.stringify(cartItems));
          toast.success(`${cartItems.length} Item added to cart`);
        }
  //  cartItem.quantity=1;
  //     const cartItems = JSON.parse(localStorage.getItem('AddedToCart') || '[]');
  //     cartItems.push({...cartItem,quantity:1});
  //     localStorage.setItem('AddedToCart', JSON.stringify(cartItems));
  //     // alert(`${cartItems.length+1} Item added to cart`);
  //     toast.success(`${cartItems.length} Item added to cart`);
  //   console.log(`Added ${product.title} to cart`);
  };
  
const RatingStars = ( {rating }:{rating:number}) => {
   const renderStars = () => {
     const starCount = Math.floor(rating);
     const stars = [];
 
     for (let i = 0; i < starCount; i++) {
       stars.push(<span key={i}>⭐</span>);
     }
 
     return stars;
   };
 
   return <ProductRating >{renderStars()}</ProductRating>;
 };
 
  const renderSizeButtons = () => {
    if (!product.sizes || product.sizes.length === 0) {
      return null;
    }

    return (
      <div>
        {product.sizes.map((size:any) => (
          <SizeButton key={size}>{size}</SizeButton>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductInfo>
          <ProductName>{product.title}</ProductName>
          <ProductPrice>
            Price:  ₹ {product.price}{' '}
            <span style={{ textDecoration: 'line-through' }}>
            ₹ {product.mrp}
            </span>
          </ProductPrice>
          <DiscountLabel>{"40% offer"}</DiscountLabel>
          <ProductDescription>{product.description}</ProductDescription>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"70%"}}>

          <label htmlFor="">rating:-</label>
         <RatingStars rating={product.rating}/>
          </div>
         <label htmlFor="">Select Size:-</label> {renderSizeButtons()}

         <ToastContainer />
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
         
        </ProductInfo>
      </ProductContainer>
    </Container>
  );
}
