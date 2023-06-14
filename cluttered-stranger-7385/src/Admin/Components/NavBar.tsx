import React, { useState } from "react";
import { styled } from "styled-components";
import logo from "../Images/Icons/logo-new.png";
import mail from "../Images/Icons/mail.png";
import noti from "../Images/Icons/notification.png";
import setting from "../Images/Icons/setting.png";
import logout from "../Images/Icons/logout.png";
import DropdownMenu from "./DropdownMenu";
import pro from "../Images/profile pic.jpg";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const NavBar = () => {
  const [isAuth, setIsAuth] = useState(false);
  // const user ={
  //   name : "Saurabh",
  //   image: pro
  // }

  return (
    <DIV>
      <div id="nav-1">
        <div id="nav-1-1">
          <img src={logo} id="logo" />
          <input placeholder="Search here" />
        </div>

        <div id="nav-1-2">
          <div id="nav-mail">
            <img src={mail} id="mail" />
            <img src={noti} id="not" />

            {!isAuth && <button id="login-btn">Login</button>}

            {isAuth && (
              <div id="login-dropdown">
                {/* <DropdownMenu user={user}/> */}

                <div className="dropdown" style={{ float: "right" }}>
                  <button className="dropbtn">
                    <img
                      src={pro}
                      style={{ width: "22%", borderRadius: "50%" }}
                    />{" "}
                    Username
                  </button>
                  <div className="dropdown-content">
                    <a href="#">
                      <img src={setting} />
                      Setting
                    </a>
                    <a href="#" onClick={() => console.log("hi")}>
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
        <a>Dashboard</a>
        {/* <a>All Products</a> */}

        {/* <div className="dropdown" style={{ float: "right" }}>
                  <button className="dropbtn">
                    <img src={pro} style={{width:"22%",borderRadius:"50%"}}/> Username
                  </button>
                  <div className="dropdown-content">
                    <a href="#"><img src={setting} />Setting</a>
                    <a href="#"  onClick={()=>console.log("hi")}><img src={logout}/>Log Out</a>
                  </div>
                </div> */}

        <Tabs variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <a></a>
        <a>abc</a>
        <a>abc</a>
        <a>abc</a>
      </div>
    </DIV>
  );
};

export default NavBar;

const DIV = styled.div`
  background-color: #5c6bc0;
  padding: 2px;

  #nav-2 {
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
