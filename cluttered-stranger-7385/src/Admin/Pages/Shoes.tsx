import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { deleteProduct, getParticularProduct } from "../Redux/action";
import ProductCard from "../Components/ProductCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Shoes = () => {
  const [category, setCat] = useState([]);

  
  const searchquery = useSelector((store: any)=>store.reducer.search)

  const handleDelete = (id: any) => {
    deleteProduct(id).then(() => {
      const newData = category.filter((ele: any) => ele.id != id);
      setCat(newData);
    });
  };

  
useEffect(()=>{
  if(searchquery){
    const queryObj ={
      params :{
        q: searchquery
      }
    }
    getParticularProduct('shoes',queryObj).then((res)=>{
      console.log(res.data);
      setCat(res.data)
    })

  } else{

    getParticularProduct('shoes',{}).then((res)=>{
      console.log(res.data);
      setCat(res.data)
    })
  }
},[searchquery])

  return (
    <>
      <MAINDIV>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/Dashboard"}>
                <span>Dashboard</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span>Shoes</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MAINDIV>
      <DIV>
        {category?.map((el, i) => (
          <ProductCard el={el} key={i} handleDelete={handleDelete} />
        ))}
      </DIV>
    </>
  );
};

export default Shoes;

const MAINDIV = styled.div`
  width: 90%;
  margin: auto;
  justify-content: start;

  span {
    color: #5c6bc0;
    font-size: 18px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  span:hover {
    scale: 1.1;
    transition: 500ms;
  }
`

const DIV = styled.div`
  // border: 2px solid red;

  width: 75%;
  margin-left: 350px;
  margin-top: 50px;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
