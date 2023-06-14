import React, { useState } from 'react';
import styled from 'styled-components';

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingStars = styled.div`
  color: gold;
`;

const SizeDropdown = styled.select`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SingleProductPage = () => {
  const product = {
    id: "1",
    title: "IVOC",
    description: "Slim Fit Shirt with Patch Pocket",
    price: 671,
    color: "Black",
    gender: "male",
    category: "shirt",
    image: "https://assets.ajio.com/medias/sys_master/root/20220819/Qm9w/62fe856aaeb269176183efe0/ivoc_black_slim_fit_shirt_with_patch_pocket.jpg",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    brand: "IVOC",
    fabric: "Cotton",
    sleeve: "Full Sleeve",
    pattern: "Solid",
  };

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleSizeChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    // Add to cart functionality
    console.log("Product added to cart!");
  };

  return (
    <ProductPageContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>Price: ${product.price}</ProductPrice>
      <ProductRating>
        Rating: 
        <RatingStars>{Array(Math.floor(product.rating)).fill("★")}</RatingStars>
      </ProductRating>
      <SizeDropdown value={selectedSize} onChange={handleSizeChange}>
        {product.sizes.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </SizeDropdown>
      <p>Brand: {product.brand}</p>
      <p>Fabric: {product.fabric}</p>
      <p>Sleeve: {product.sleeve}</p>
      <p>Pattern: {product.pattern}</p>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </ProductPageContainer>
  );
};

export default SingleProductPage;
