import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { AllProduct, Product } from "../Types";
import { deleteProduct, getProduct, querySearch } from "../Redux/action";
import ProductCard from "../Components/ProductCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import halt from "../Images/unrecognized.jpg";
import Pagination from "../Components/Pagination";
import axios from "axios";

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

  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(0);

  let btnArr: any = [];

  useEffect(() => {
    axios
      .get(`https://cluttered-stranger-backend.onrender.com/products`)
      .then((res) => {
        setTotalPage(Math.ceil(res.data.length / 18));
      });
  }, []);

  for (let i = 1; i <= totalpage; i++) {
    btnArr.push(i);
  }

  const searchquery = useSelector((store: any) => store.reducer.search);

  const isAuth = useSelector((store: any) => store.AuthReducer.isAuth);

  const handleDelete = (id: any) => {
    deleteProduct(id).then(() => {
      const newData = alldata.filter((ele: any) => ele.id != id);
      setAllData(newData);
    });
  };

  useEffect(() => {
    if (searchquery) {
      const queryObj = {
        params: {
          _limit: 18,
          q: searchquery,
          _page:page
        },
      };

      getProduct(queryObj).then((res: any) => {
        console.log(res.data);
        setAllData(res.data);
      });
    } else {
      const queryObj = {
        params: {
          _limit: 18,
          q: searchquery,
          _page: page
        },
      };

      getProduct(queryObj).then((res: any) => {
        console.log(res.data);
        setAllData(res.data);
      });
    }
  }, [searchquery,page]);

  return (
    <>
      {isAuth && (
        <div>
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

          <PAGI>
            {btnArr?.map((el: any) => (
              <Pagination key={el} val={el} setPage={setPage}/>
            ))}
          </PAGI>
        </div>
      )}

      <DIV>{!isAuth && <img id="halt" src={halt} />}</DIV>
    </>
  );
};

export default AllProducts;

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
`;

const DIV = styled.div`
  // border: 2px solid red;

  width: 75%;
  margin-left: 350px;
  margin-top: 50px;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  #halt {
    text-align: center;
    margin-left: 35%;
    margin-top: 150px;
    scale: 1.2;
  }
`;

const PAGI = styled.div`
  width: 70%;
  display: flex;
  padding-top: 40px;
  margin: auto;
  justify-content: space-around;
  // border: 1px solid;
  margin-left: 350px;
`;
