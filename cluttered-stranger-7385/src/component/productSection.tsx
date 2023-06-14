import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';

const Productsection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export default function ProductSection() {
  return (
    <Productsection>
      <Cart
        image="https://tse1.mm.bing.net/th?id=OIP.gYP0dz4NMbJlMujqKdkD-gHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99"
        title="Laptop Screen"
        price="$199"
        offer="10% Off"
      />
      <Cart
        image="https://tse1.mm.bing.net/th?id=OIP.gYP0dz4NMbJlMujqKdkD-gHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99"
        title="Laptop Screen"
        price="$199"
        offer="10% Off"
      />
      <Cart
        image="https://tse1.mm.bing.net/th?id=OIP.gYP0dz4NMbJlMujqKdkD-gHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99"
        title="Laptop Screen"
        price="$199"
        offer="10% Off"
      />
      <Cart
        image="https://tse1.mm.bing.net/th?id=OIP.gYP0dz4NMbJlMujqKdkD-gHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99"
        title="Tablet Screen"
        price="$99"
        offer="20% Off"
      />
      <Cart
       image="https://tse1.mm.bing.net/th?id=OIP.gYP0dz4NMbJlMujqKdkD-gHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99"
        title="Tablet Screen"
        price="$99"
        offer="20% Off"
      />
      <Cart
       image="https://tse1.mm.bing.net/th?id=OIP.gYP0dz4NMbJlMujqKdkD-gHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99"
        title="Mobile Screen"
        price="$49"
        offer="15% Off"
      />
    </Productsection>
  );
}
