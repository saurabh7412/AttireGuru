import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button
  } from '@chakra-ui/react'
  

import {ChevronDownIcon} from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react";
import {Link,useNavigate, useSearchParams} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/navbar.css"
import styled from "styled-components";
import {BsHandbag} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
// import {BiSearch} from "react-icons/bi"
import {FiLogIn} from "react-icons/fi"
import { Icon } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"

import logo_final from "../Images/logo-new.png"
// import { getProduct } from "../Api/action";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { RootState } from '../Constraints/Type';
import { LoginFailure } from '../Redux/Login/action';
// import styled from "styled-components";
 const Navbar = () => {
	{/* -------------------------------------------------------I added search here------------------------- */}
	// const dispatch = useDispatch()
	// const [searchParams,setSearchParams] = useSearchParams();
	// const initialParams = searchParams.getAll("category" || "color" ||"gender")
	// const [searchText,setSearchText] = useState(initialParams || "");
	

	// const paramObj = {
	// 	params : {
	// 	  q : searchText && searchText
	// 	}
	//   }
	//   useEffect(()=>{
	// 	dispatch(getProduct(paramObj))
	//   },[searchText])

	// const navRef = useRef(null);
	const [navClass, setNavClass] = useState<boolean>(false)

	

	const showNavbar = () => {
		setNavClass(!navClass)		
	};

	const login = useSelector((state:RootState)=> state.AuthReducer.isAuth)
	// const searchBar = useRef(null)

const dispatch = useDispatch()
	const handleLogOut = () =>{
		dispatch(LoginFailure())
	}

	// const showSearch = ()=>{
	// 	searchBar.current.classList.toggle(
	// 		"navSearch"
	// 	);
	// 	console.log('check');
	// }
	
const navgite = useNavigate()
	return <header>
			
			<Link to="/" > <img className="logo" alt="logo" src={logo_final} /> </Link>


			<div className= {"secNav"} >
			{/* ref={navRef} */}
			<nav className= {navClass ? "responsive_nav" : "false"} >
				<Link  to="/aboutus" >ABOUT</Link>
                <div className="blackDot"></div>
				<Link  to="/men" className="about section" >MEN</Link>
                <div className="blackDot"></div>
				<Link to="/women" >WOMEN</Link>
                <div className="blackDot"></div>
				<Link to="/product" >SHOP</Link>
				
                
				<button
					className="nav-btn nav-close-btn" onClick={showNavbar}
					>
						{/* onClick={showNavbar} */}
					<Icon as={FaTimes }  color={"white"}/>
				</button>
				{/* -------------------------------------------------------I added search here------------------------- */}
				
			</nav>
            <div className="navIcons">
				{/* <input className="beforeSearch" ref={searchBar} type="text" placeholder="Search"  onChange={(e)=>setSearchText(e.target.value)}/> */}
                    {/* <SearchIcon onClick={showSearch}/> */}
					<Link to="/cart">
					<Icon as={BsHandbag} color={"white"}/>
					</Link>
                    {
						login ? <Menu>
						{({ isOpen }) => (
						  <div>
							<MenuButton isActive={isOpen} as={Button}   >
							  {isOpen ? <Icon size={30} as={CgProfile} /> : <Icon as={CgProfile} size={30} />}
							</MenuButton>
							<MenuList style= {{display:"flex", flexDirection:"column"}}>
							  <MenuItem color={"black"} onClick={()=> {
								// navgite("https://playful-tiramisu-3e651f.netlify.app/Login")
								window.open(`https://playful-tiramisu-3e651f.netlify.app/Login`,"_self")
							  }}>Admin</MenuItem>
							  <MenuItem color={"black"} onClick={handleLogOut}>Log Out</MenuItem>
							</MenuList>
						  </div>
						)}
					  </Menu> : <Link to="/login">
                    <Icon as={FiLogIn} color={"white"}/>
					</Link>

					}
					
                </div>
			<button onClick={showNavbar}
				className="nav-btn"
				 >
				
				<Icon as={FaBars} size={10}  />
			</button>
			</div>
		</header>
	
}





export default Navbar