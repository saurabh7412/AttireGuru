import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { AllProduct, Product } from "../Types";
import { deleteProduct, getProduct, querySearch } from "../Redux/action";
import ProductCard from "../Components/ProductCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export interface Productss {
  id: string;
  category: string;
  color: string;
  description: string;
  gender: string;
  image: string;
  price: number;
  title: string;
}

const AllProducts = () => {
  const [alldata, setAllData] = useState([]);
  

  const searchquery = useSelector((store: any)=>store.reducer.search)

  console.log(searchquery);
  
  
  

  const handleDelete = (id: any) => {
    deleteProduct(id).then(() => {
      const newData = alldata.filter((ele: any) => ele.id != id);
      setAllData(newData);
    });
  };


  useEffect(()=>{
    if(searchquery){
      const queryObj ={
        params :{
          q: searchquery
        }
      }

      getProduct(queryObj).then((res: any)=>{
        console.log(res.data);
        setAllData(res.data)
      })

    } else{
      getProduct({}).then((res:any)=>{
        console.log(res.data);
        setAllData(res.data)
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
              <span>All Products</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MAINDIV>

      <DIV>
        {alldata?.map((el, i) => (
          <ProductCard el={el} key={i} handleDelete={handleDelete} />
        ))}
      </DIV>
    </>
  );
};

export default AllProducts;

const MAINDIV = styled.div`

  width: 90%;
  margin: auto;
  justify-content: start;

  span{
    color: #5c6bc0;
    font-size: 18px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  }

  span:hover {
    scale:1.1;
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
