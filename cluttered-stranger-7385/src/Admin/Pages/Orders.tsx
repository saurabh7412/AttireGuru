import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { styled } from "styled-components";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import halt from "../Images/unrecognized.jpg";
import { reqOrders } from "../Redux/action";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import OrdersCard from "../Components/OrdersCard";

const Orders = () => {
  const isAuth = useSelector((store: any) => store.AuthReducer.isAuth);
  const [orders,setOrders] = useState([]);
  useEffect(() => {
    reqOrders().then((res) => {
      console.log(res.data);
      setOrders(res.data)
    });
  }, []);
  return (
    <DIV>
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
                  <span>Orders</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </MAINDIV>

          <ORDERS>
        {
            orders?.map((el,index)=>(
              <OrdersCard key={index}  el={el} />
            ))
        }
      </ORDERS>
        </div>
      )}
      {!isAuth && <img id="halt" src={halt} />}
    </DIV>
  );
};

export default Orders;


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
  #halt {
    text-align: center;
    margin-left: 35%;
    margin-top: 150px;
    scale: 1.2;
  }
`;

const ORDERS = styled.div`

// border: 1px solid red;
width: 70%;
margin:auto;
display: grid;
grid-template-columns: repeat(5,1fr)
gap:25px;

`
