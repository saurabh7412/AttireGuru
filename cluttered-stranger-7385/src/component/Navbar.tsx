import { useEffect, useRef, useState } from "react";
import {Link, useSearchParams} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/navbar.css"
import styled from "styled-components";
import {BsHandbag} from "react-icons/bs"
// import {BiSearch} from "react-icons/bi"
import {IoPersonOutline} from "react-icons/io5"
import { Icon } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"

import logo_final from "../Images/logo-new.png"
// import { getProduct } from "../Api/action";
import { useDispatch } from "react-redux";

// import styled from "styled-components";
 const Navbar = () =>{
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

	// const searchBar = useRef(null)


	// const showSearch = ()=>{
	// 	searchBar.current.classList.toggle(
	// 		"navSearch"
	// 	);
	// 	console.log('check');
	// }

	return <header>
			
			<Link to="/"> <img className="logo" alt="logo" src={logo_final} /> </Link>


			<div className= {"secNav"} >
			{/* ref={navRef} */}
			<nav className= {navClass ? "responsive_nav" : "false"} >
				<Link  to="/about" >ABOUT</Link>
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
					<Icon as={FaTimes} />
				</button>
				{/* -------------------------------------------------------I added search here------------------------- */}
				
			</nav>
            <div className="navIcons">
				{/* <input className="beforeSearch" ref={searchBar} type="text" placeholder="Search"  onChange={(e)=>setSearchText(e.target.value)}/> */}
                    {/* <SearchIcon onClick={showSearch}/> */}
					<Link to="/cart">
					<Icon as={BsHandbag}/>
					</Link>
                    
					<Link to="/login">
                    <Icon as={IoPersonOutline}/>
					</Link>
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