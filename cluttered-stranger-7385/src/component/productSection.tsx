import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { getProducts } from '../Redux/ProductReducer/action';
import { Iproduct, MyObject, RootState } from '../Constraints/Type';
import Cart from './Cart';
import Pagination from './Pegination';
import { Skeleton } from '@chakra-ui/react';
import { LoginSuccess } from '../Redux/Login/action';

const ProductSections = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  input {
    margin-right: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    background-color: #283593;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color:white;
  }
`;

const TotalProducts = styled.div`
margin:10px,20px,30px,40px;
color:red;
  margin-bottom: 16px;
`;

export default function ProductSection() {
  const dispatch: Dispatch<any> = useDispatch();
  const productsData = useSelector((state: RootState) => state.ProductReducer.product);
  const totalPage = useSelector((state: RootState) => state.ProductReducer.totalPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  //  const loading = useSelector((state: RootState) => state);

  // const isAuth = localStorage.getItem("isAuth") || false;



  // console.log(isAuth);
  
  // console.log(loading)
  useEffect(() => {

  
    
    const obj: MyObject = {
      params: {
        category: searchParams.getAll('category'),
        gender: searchParams.getAll('gender'),
        color: searchParams.getAll('color'),
        _limit: 16,
        _page: page,
        _sort: searchParams.get('order') && 'price',
        _order: searchParams.get('order'),
        q: searchQuery, // Add search query to the params
      },
    };

    dispatch(getProducts(obj));

    // dispatch(LoginSuccess())

  
    
  }, [ searchParams, page, searchQuery]);



  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
//  if(loading.isLoading){
//   return ( <Skeleton height="20px" my="4" />)
//  }


  return (
    <div>
      <SearchBar>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        
      </SearchBar>
      
      <ProductSections>
        {productsData?.map((product: Iproduct) => (
          <Cart key={product.id} offer="new arrival" {...product} />
        ))}
      </ProductSections>
      <Pagination currentPage={page} totalPages={totalPage} onPageChange={setPage} />
    </div>
  );
}
