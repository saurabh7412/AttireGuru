import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

import halt from "../Images/unrecognized.jpg"
import { reqUsers } from '../Redux/action';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import UsersCard from '../Components/UsersCard';

const Users = () => {
  const isAuth = useSelector((store: any) => store.AuthReducer.isAuth);

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    reqUsers().then((res)=>{
      console.log(res.data);
      setUsers(res.data);
    })
  },[])

  // console.log(users);
  


  return (
    <DIV>
  {isAuth && 
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
              <span>Users</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MAINDIV>

      <USERS>
        {
            users?.map((el,index)=>(
              <UsersCard key={index}  el={el} />
            ))
        }
      </USERS>

    </div>
  }
  {!isAuth && <img id="halt" src={halt}/>}
  </DIV>
  )
}

export default Users



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
#halt{
  text-align: center;
  margin-left: 35%;
  margin-top: 150px;
  scale: 1.2;
}

`

const USERS = styled.div`

// border: 1px solid red;
width: 70%;
margin:auto;
display: grid;
grid-template-columns: repeat(5,1fr)
gap:25px;

`