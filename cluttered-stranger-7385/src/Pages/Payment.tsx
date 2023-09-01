import React, { useState } from "react";
import styled from "styled-components"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import '~mdb-ui-kit/css/mdb.min.css';
// import { getLocalstorageData } from "../Api/LocalStorage";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Button } from "@chakra-ui/react";

export const Payment = () => {
  const [name,setName] = useState<string>("")
  const [addres,setAddress] = useState<string>("")
  const [number,setNumber] = useState<string>("")
  const [card,setCard] = useState<string>("")
  const [opt,setOtp] = useState<string>("")
  const [inputOpt,setInputOTP] = useState<string>("")

  
    const navigate=useNavigate()
    // localStorage.setItem("order", JSON.stringify({totolAmount: 1000, totalProduct: 5}))

    type infoType = {
      totalAmount: number,
      totalProduct: number,
    }

    const paymentdone=()=>{

      if(name == "" || card=="" || number == "" || addres == "" ){
        toast.info("Please Fill All The Details")

      }
      else if(opt === inputOpt && inputOpt !== ""){
        
        toast.success("order successful")
        const info = (localStorage.getItem("order"))
        
        const data= info ? JSON.parse(info) : {};
        let obj = {
          id: Math.random(),
          title: data.totalProduct,
          image:"",
          price:data.totolAmount,
          username: name,
          addres: addres,
          mobile: number,
        }
        console.log(obj,data);
        
        axios.post("https://cluttered-stranger-backend.onrender.com/orders",obj).then((res)=> console.log(res)).catch((err)=> console.log(err))
        
        setTimeout(()=>{
          
          
          navigate("/");
          
        },4000)
      }
      else{
        toast.info("Please enter correct OTP")
      }
    }


  const handleGetOtp = ()=>{
    let ans = Math.floor(Math.random()*9000)+1000;
    toast.success(`Your OTP for Payment is :- ${ans}`)
    setOtp(ans+"")
  }

  return (
    <DIV >
    <MDBContainer
      className="py-5"
      // fluid
      
    >
      <ToastContainer/>
      
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody  className="p-4 " style={{display:"flex", flexDirection:"column", gap:"10px" }}>
              <div className="text-center mb-4">
                <h3>Enter Your Details</h3>
                {/* <h6>Payment</h6> */}
               
              </div>
              <div  className="flex-fill mx-3" >
                {/* <label htmlFor="">Name</label> */}
                  <MDBInput
                    // label="Name"
                    id="form4"
                    type="text"
                    onChange={(e: any)=> setName(e.target.value)}
                    size="lg"
                    placeholder="Name"
                    value={name}
                    // width={"100px"}
                    style={{width:"100%"}}
                  />
                </div>
                <div   className="flex-fill mx-3" >
                  <MDBInput
                    placeholder="Address"
                    id="form4"
                    type="text"
                    size="lg"
                    value={addres}
                    onChange={(e: any)=> setAddress(e.target.value)}
                    // style={{margin:"auto"}}
                  />
                </div>
                <div   className="flex-fill mx-3"  >
                  <MDBInput
                    placeholder="Mobile Number"
                    id="form4"
                    type="text"
                    // placeholder="Number"
                    width={"150px"}
                    size="lg"
                    maxLength={10}
                    value={number}
                    onChange={(e: any)=> setNumber(e.target.value)}
                    // style={{margin:"auto"}}
                  />
                </div>
              
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
               
              </div>
              
              <p style={{color:"blue",fontSize:"20px"}}>Enter Your Card Number</p>
              <MDBRow className="my-4">
              <div className="cardDiv">
                
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                <div className="flex-fill mx-3">
                  
                    <MDBInput
                      placeholder="Card Number"
                      id="form1"
                      type="number"
                      size="lg"
                      onChange={(e:any)=> setCard(e.target.value)}
                      value={card}
                      // maxLength={12}
                    //   value="** ** ** 3193"
                  maxLength={3}
                    />
                  
                </div>
                {/* <a href="#!">Remove card</a> */}
              </div>
                <MDBCol style={{width:"80%", display:"flex", justifyContent:"space-around", margin:"auto" }} >
                <MDBCol size="2">
                  <MDBInput
                    placeholder="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    maxLength={3}
                    
                    // placeholder="CVV"
                  />
                </MDBCol>
                  <MDBInput
                    // label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    maxLength={6}
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                
              </MDBRow> 
      <p>Click Here To ? <span style={{color:"blue"}}> <button onClick={handleGetOtp}><u>Get OTP</u></button></span> </p>
      <MDBCol style={{width:"fit-content", margin:"auto"}} size="4">
                  <MDBInput
                    // label="Enter OTP"
                    id="form6"
                    type="number"
                    size="sm"
                    onChange={ (e : any )=> setInputOTP(e.target.value)}
                    placeholder="Enter Your OTP"
                  />
                </MDBCol>
                <div style={{marginBottom: "20px"}}></div>
              <Button bg={"green.400" } fontSize={"lg"}  
              onClick={paymentdone}
              >
               Click to Proceed 
              </Button>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </DIV>
  );
}

const DIV = styled.div`
  /* style= {{paddingTop:"40px"}}style= {{paddingTop:"40px"}} */
  padding-top: 40px;

  .inputDiv{
    display: flex;
    justify-content: center;
    margin: auto;
    /* width: 100%; */
    margin-top: 10px;
  }
  .inputDiv > input{
    width: 100%;
  }
  .cardDiv{
    display: flex;
    margin: 10px auto;
    width: 90%;
    /* padding: 0 0 0 10px; */
  }
  /* .cardDiv > img{
    margin-top: 10px;
  } */



`

// export  default Payment