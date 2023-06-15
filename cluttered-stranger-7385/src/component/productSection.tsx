import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { getProducts } from '../Redux/ProductReducer/action';
import { Iproduct, MyObject, RootState } from '../Constraints/Type';
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
  const dispatch: Dispatch<any> = useDispatch();
  const productsData = useSelector((state: RootState) => {console.log(state)
  return state.product
  });
  const totalPage = useSelector((state: RootState) => state.totalPage);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
console.log(productsData,totalPage)
  useEffect(() => {
    // const obj = {
    //   params: {
    //     category: searchParams.getAll('category'),
    //     gender: searchParams.getAll('gender'),
    //     _limit: 16,
    //     _page: page,
    //     _sort: searchParams.get('order') === 'price' ? 'price' : undefined,
    //     _order: searchParams.get('order')
    //   }
    // };
    const obj: MyObject = {
      params: {
        category: [],
        gender: [],
        _limit: 16,
        _page: 0,
        _sort: "price",
        _order: null,
      },
    };
    
    dispatch(getProducts(obj))
    
  }, [dispatch, searchParams, page]);

  console.log(productsData);

  return (
    <Productsection>
      {productsData.map((product:Iproduct) => (
        <Cart key={product.id} offer={"new arrival"} {...product}/>
      ))}
    </Productsection>
  );
}
