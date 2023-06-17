import React ,{useEffect, useState}from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { AllProduct, Product } from '../Types'
import { getProduct } from '../Redux/action'
import ProductCard from '../Components/ProductCard'


export interface Productss {
  id : string;
    category : string;
    color : string;
    description : string;
    gender: string;
    image : string;
    price : number;
    title: string;
}

const AllProducts = () => {

  const [alldata,setAllData] = useState([]);

  

  useEffect(()=>{
    getProduct().then((res)=>{
      console.log(res.data);
      setAllData(res.data)
    })
  },[])

  return (
    <DIV>
      {
        alldata?.map((el)=>(
          <ProductCard el = {el}/>
        ))
      }
    </DIV>
  )
}

export default AllProducts


const DIV = styled.div`
  // border: 2px solid red;
  
  width  : 75%;
  margin-left: 350px;
  margin-top: 50px;
  gap: 30px;
  display : grid;
  grid-template-columns: repeat(3,1fr)

`