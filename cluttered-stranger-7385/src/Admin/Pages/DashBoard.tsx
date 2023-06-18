import React from "react";
import { useSelector } from "react-redux";
import halt from "../Images/unrecognized.jpg";
import { styled } from "styled-components";
import stack from "../Images/Icons/stack.png";
import user from "../Images/Icons/user.png";
import pin from "../Images/Icons/pin.png";
import target from "../Images/Icons/target.png";
import chart from "../Images/piechart.png";
import graph from "../Images/graph.png";
import graph2 from "../Images/graph2.png";

const DashBoard = () => {
  const isAuth = useSelector((store: any) => store.AuthReducer.isAuth);

  return (
    <DIV>
      {isAuth && 
        <div className="maindiv">
          <div className="div1">
            <div className="div1-1">
              <div className="div1-1-1">
                    <h1>2889</h1>
                    <p>Total Invoices</p>
              </div>
              <img src={stack}/>
            </div>
            <div className="div1-1">
              <div className="div1-1-1">
                    <h1>217</h1>
                    <p>New Users</p>
              </div>
              <img src={user}/>
            </div>
            <div className="div1-1">
              <div className="div1-1-1">
                    <h1>984</h1>
                    <p>Unique Visits</p>
              </div>
              <img src={pin}/>
            </div>
            <div className="div1-1">
              <div className="div1-1-1">
                    <h1>12789</h1>
                    <p>Sales</p>
              </div>
              <img src={target}/>
            </div>
          </div>


          <div className="div2">

              <div className="div2-1">
                <h1>EARNING REPORT</h1>
                <img src={chart}/>
                <div className="div2-1-0">
                  <h2>1.2M </h2>
                  <label>Total</label>
                </div>
                <div className="div2-1-1">
                  <p><p id="s1"></p>Sales</p>
                  <h3>60%</h3> 
                </div>
                <div className="div2-1-1">
                  <p><p id="s2"></p>Open Campaign</p>
                  <h3>30%</h3> 
                </div>
                <div className="div2-1-1">
                  <p><p id="s3"></p>Miscellaneous</p>
                  <h3>10%</h3> 
                </div>


              </div>

              <div className="div2-2">
                  <div className="div2-2-1">
                    <h1>PERFORMANCE</h1>

                    <div className="perf">
                      <div>
                        <h2>Tasks</h2>
                        <p>5.6% change Today</p>
                      </div>
                      <div><h3>+20009</h3></div>
                    </div>

                    <div className="perf">
                      <div>
                        <h2>Member Profit</h2>
                        <p>3 days ago</p>
                      </div>
                      <div><h3 style={{color:"red"}}>+91964</h3></div>
                    </div>

                    <div className="perf">
                      <div>
                        <h2>Orders</h2>
                        <p>Weekly Orders</p>
                      </div>
                      <div><h3 style={{color:"green"}}>-200</h3></div>
                    </div>

                    <div className="perf">
                      <div>
                        <h2>Pending</h2>
                        <p>Pending Tasks</p>
                      </div>
                      <div><h3 style={{color:"orange"}}>+5152</h3></div>
                    </div>

                    <div className="perf">
                      <div>
                        <h2>Revenue</h2>
                        <p>5% increase</p>
                      </div>
                      <div><h3 style={{color:"teal"}}>+89997</h3></div>
                    </div>

                  </div>

                  <div className="div2-2-2">
                      <h1>YEAR-WISE PERFORMANCE</h1>
                      <p>Performance of the team is 75% higher this year !</p>
                      <img src={graph}/>
                  </div>
              </div>
          </div>

          <div className="div3">
            <img src={graph2}/>
          </div>
        </div>
      }
      {!isAuth && <img id="halt" src={halt} />}
    </DIV>
  );
};

export default DashBoard;

const DIV = styled.div`

  background-color: #E8EAF6;
  height: 1200px;
  padding: 30px;

  #halt {
    text-align: center;
    margin-left: 35%;
    margin-top: 150px;
    scale: 1.2;
  }

  .div2-1 img:hover {
    scale:1.2;
    transition: 500ms;
    cursor: pointer;
  }

  .div2-2 img:hover {
    scale:1.1;
    transition: 500ms;
    cursor: pointer;
  }

  .div3{
    width: 70%;
    display: flex;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 5px;
    margin-top: 30px;
  }
  .div3 img{
    width: 100%;
  }

  .div2-2{
    width: 65%;
    // border: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: start;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 5px;
  }
  
  .div2-2-1{
    // border: 1px solid red;
    width: 40%;
    border-right: 1px solid grey;
    text-align: start;
    padding:25px;
    
  }

  .div2-2-1 h1{
    font-size : 25px;

  }

  .div2-2-2{
    // border:  1px solid;
    padding: 25px;
    text-align: start;
  }

  .div2-2-2 h1{
    font-size: 25px;
    margin-bottom: 30px;
  }
  .div2-2-2 img{
    width: 100%;
    margin-top: 110px;
  }
  .perf{
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .perf p{
    font-size: 15px;
  }
  .perf h3{
    font-size : 22px;
    color: #1976D2;
  }

  .div1{
    
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius : 5px;
    background-color: white;

  }

  .div1-1{
    // border: 2px solid red;
    border-left: 1px solid grey;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img{
    width: 25%;
    
  }
  .div2-1-0{
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
  }

  

  .div1-1-1 h1{
    font-size: 45px;
    font-weight: bold;
  }
  p{
    color: gray;
  }

  .div2{
    // border: 1px solid;
    width: 70%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top:40px;
  }
  .div2-1{
    // border: 1px solid red;
    width: 30%;
    text-align: center;
    padding: 30px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 5px;
  }

  .div2-1 h1{
    font-size: 25px;
    margin-bottom: 20px;
  }
  .div2-1 img{
    width: 50%;
    margin-left: 70px;
  }

  .div2-1-0 h2{
    font-size: 32px;
    font-weight: bold;

  }
  .div2-1-1{
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
  }
  .div2-1-1 h3{
    font-weight: bold;

  }

  #s1,#s2,#s3{
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  #s1{
    background-color: #007bff
  }
  #s2{
    background-color:#fdbab1
  }
  #s3{
    background-color:#f3f6f9
  }
  
  
  
`;
