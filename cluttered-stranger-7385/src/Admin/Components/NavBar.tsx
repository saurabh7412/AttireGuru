import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import logo from "../Images/Icons/logo-new.png";
import mail from "../Images/Icons/mail.png";
import noti from "../Images/Icons/notification.png";
import setting from "../Images/Icons/setting.png";
import logout from "../Images/Icons/logout.png";
import DropdownMenu from "./DropdownMenu";
import saurabh from "../Images/profile pic.jpg";
import murad from "../Images/murad.png";
import vishal from "../Images/vishal.jpg";
import { Link, useNavigate } from "react-router-dom";

import { Tabs, TabList, TabPanels, Tab, TabPanel, useDisclosure } from "@chakra-ui/react";
import AllProducts from "../Pages/AllProducts";
import DashBoard from "../Pages/DashBoard";
import { querySearch } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, SEARCH_PRODUCT } from "../Redux/actionType";

const NavBar = () => {
  
  const [search ,setSearch] = useState('');
  const isAuth = useSelector((store: any)=>store.AuthReducer.isAuth)
  const username = useSelector((store: any)=>store.AuthReducer.username)
  
  const dispatch = useDispatch()

  const navigate = useNavigate();

  
  const handleSearch =(e:React.ChangeEvent<HTMLInputElement> )=>{
    setSearch(e.target.value)
    dispatch({type: SEARCH_PRODUCT, payload: e.target.value})
  }

  const handleLogOut =()=>{
    console.log("hi");
    dispatch({type: LOGOUT})
    localStorage.clear();
    
  }
  const handleLogin =()=>{
    navigate(`/Login`)
  }
  
  

  return (
    <DIV>
      <div id="nav-1">
        <div id="nav-1-1">
          <Link to={"/Dashboard"} id="logo">
            <img src={logo} />
          </Link>
          <input placeholder="Search here" value={search} onChange={handleSearch}/>
        </div>

        <div id="nav-1-2">
          <div id="nav-mail">
            <img src={mail} id="mail" />
            <img src={noti} id="not" />

            {!isAuth && <button id="login-btn" onClick={handleLogin}>Login</button>}

            {isAuth && (
              <div id="login-dropdown">
                {/* <DropdownMenu user={user}/> */}

                <div className="dropdown" style={{ float: "right" }}>
                  <button className="dropbtn">
                    <img
                      src={username === "saurabh"? saurabh : username === 'vishal'? vishal : username === 'murad'? murad : 'Username'}
                      style={{ width: "22%", borderRadius: "50%" }}
                    />{" "}
                    {username === "saurabh" ? "SB" : username === "vishal" ? "VG": username === "murad"? "MK": "username"}
                  </button>
                  <div className="dropdown-content">
                    <a href="#">
                      <img src={setting} />
                      Setting
                    </a>
                    <a href="#" onClick={handleLogOut}>
                      <img src={logout} />
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="nav-2">

        <div className="dropdown" style={{ float: "right" }}>
          <button className="dropbtn">Products</button>
          <div className="dropdown-content">
            <Link to={"/AllProducts"}>AllProducts</Link>
            <br />
            <Link to={"/Shirts"}>Shirts</Link>
            <br />
            <Link to={"/Kurtas"}>Kurtas</Link>
            <br />
            <Link to={"/Dress-Material"}>Dress-Material</Link>
            <br />
            <Link to={"/Sarees"}>Sarees</Link>
            <br />
            <Link to={"/Jeans"}>Jeans</Link>
            <br />
            <Link to={"/Shoes"}>Shoes</Link>
            <br />
            <Link to={"/Sandals"}>Sandals</Link>
            <br />
          </div>
        </div>

        <Link to={"/Dashboard"} className="navlink">Dashboard</Link>
        <Link to={"/AddProduct"} className="navlink">Add New Product</Link>
        <Link to={"/Users"} className="navlink">Users</Link>
        <Link to={"/Orders"} className="navlink">Orders</Link>
      </div>
    </DIV>
  );
};

export default NavBar;

const DIV = styled.div`
  background-color: #5c6bc0;
  padding: 2px;

  .navlink: hover{
    color: #283593;
    scale: 1.2;
    transition : 500ms;
    padding : 0px 5px;
  }

  #nav-2 {
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 7px;
  }

  #login-btn {
    border: none;
    background-color: #283593;
    border-radius: 10px;
    padding: 5px 15px 5px 15px;
    color: white;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 22px;
    margin-left: 50px;
  }
  #login-btn: hover {
    cursor: pointer;
    scale: 1.1;
    transition: 500ms;
  }

  .dropbtn {
    width: 150px;
    background-color: #283593;
    border-radius: 10px;
    color: white;
    padding: 5px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
    margin-top: 2px;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a img {
    width: 20px;
    margin-right: 20px;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown:hover .dropbtn {
    background-color: #3f51b5;
  }

  #nav-1 {
    width: 85%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
  }
  #nav-1-1 {
    display: flex;
    margin: auto;
    justify-content: space-between;
    // border: 2px solid;
  }

  #nav-1-1 input {
    border: none;
    border-radius: 10px;
    padding: 5px 15px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  #nav-1-1 input:focus {
    scale: 1.1;
    transition: 500ms;
  }
  #nav-1-2 {
    display: flex;
    justify-content: end;
    padding-left: 150px;
  }

  #logo {
    width: 50%;
  }
  #mail {
    width: 7%;
    height: 7%;
    margin-left: 200px;
  }
  #mail: hover {
    cursor: pointer;
    scale: 1.1;
    transition: 500ms;
  }
  #not {
    width: 7%;
    height: 7%;
    margin-left: 50px;
  }

  #not: hover {
    cursor: pointer;
    scale: 1.1;
    transition: 500ms;
  }

  #setting {
    width: 10%;
  }
  #logout {
    width: 10%;
  }

  #nav-mail {
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 60%;
    align-items: center;
  }
`;
