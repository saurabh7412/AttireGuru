import textBanner from "../Images/textBanner.png";
import Tshirt from "../Images/Tshirt.png";
import jacket from "../Images/jacket.jpg"
import styled from "styled-components";
import { StarIcon } from "@chakra-ui/icons";
import { HomeProduct } from "../component/HomeProducts";
import { BsGlobe } from "react-icons/bs";
import { BiPlanet } from "react-icons/bi";
import { Icon } from "@chakra-ui/react";
// import buyicon from "../images/buyicon.svg"
// import "../Styles/home.css"
 const Home = () => {
   return (
      <DIV>
         <div className="topImages">
            <img src={Tshirt} alt="" />
            <div className="nextImages">
               <img src={textBanner} alt="" />
               <div className="capsImage">
                  <img
                     src="https://cdn.pixabay.com/photo/2022/06/22/16/00/cap-7278216_960_720.jpg"
                     alt=""
                  />
                  <img
                     src="https://cdn.pixabay.com/photo/2015/07/02/20/13/hats-829509_960_720.jpg"
                     alt=""
                  />
               </div>
            </div>
         </div>
         <p className="brandDesc">
            QUICK BUY makes clothes to elevate everyday life through
            lighthearted escapism. while styles very by season,{" "}
            <div className="allCollection">
               {" "}
               <StarIcon /> all collection
            </div>{" "}
            are guided by the ineffable sense of freedom that comes with travel.
         </p>
         <div className="shopSection">
            <h1>SHOP BY ESSENTIALS</h1>
            <HomeProduct />
         </div>
         <div className="lastDiv">
            <div className="orangeDiv">
               <h1>WE'RE CHANGING</h1>
               <h1>THE WAY THINGS</h1>
               <h1>GET MADE.</h1>

               <hr className="hrline" />
               <div className="VisionDiv">
                  <div className="missionDiv">
                     <div className="flexIcon">
                        <div className="lastIcons">
                           <Icon color="white" as={BsGlobe} />
                        </div>
                        <h3>MISSION</h3>
                     </div>
                     <p style={{color:"white"}}>
                        We're on a mission to empower creative independence in a
                        commercial world and incredible
                     </p>
                  </div>
                  <div className="missionDiv">
                     <div className="flexIcon">
                        <div className="lastIcons">
                           <Icon color="white" as={BiPlanet} />
                        </div>
                        <h3>SUSTAINBILITY</h3>
                     </div>
                     <p style={{color:"white", cursor: 'url("../images/Curser.png")' }} >
                        We're challenging contional retail, putting an end to
                        dead stock, unconventional waste and more funtastic.
                     </p>
                  </div>
               </div>
            </div>

            <img src={jacket} alt="" />
         </div>
         <h1 className="yourDesign">
            WANT TO DESIGN YOUR OWN? CALM, WE CAN DO IT!
         </h1>
         <video
            autoPlay={true}
            muted
            loop
            className="Mvedio"
            width="95%"
            height="200"
            controls={false}
         >
            <source src={require("../Images/measurmen.mp4")} type="video/mp4" />
         </video>
      </DIV>
   );
};
export default Home;

const DIV = styled.div`
   /* margin-top: 60px; */
   background-color: #f2f2f2;
   padding: 20px;
   padding-top: 80px;
   margin: 0;

   .topImages {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 95%;
      /* height: 350px; */
      margin: auto;
      gap: 10px;
      /* cursor: url("https://img.icons8.com/?size=512&id=WHW99HGMP4WJ&format=png"), auto; */
   }
   .topImages > :nth-child(1) {
      border-radius: 10px;
      width: 100%;
      /* height: 100%; */
      /* overflow-x: hidden; */
      /* height: 600px; */
      /* overflow-y: hidden; */
      /* text-align: end; */
      /* cursor: url("../images/buyicon.svg"), auto; */
      cursor: pointer;
   }
   .nextImages{
      /* height: 90%; */
      display: grid;
      grid-template-columns: repeat(1,1fr);
   }
   .nextImages > img {
      width: 100%;
      
      border-radius: 10px;
   }
   .capsImage {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      /* width: 100%; */
      gap: 10px;
      margin: 10px 0 0 0;
      /* height: 190px; */
      /* gap: 20px; */
   }
   .capsImage > img {
      /* padding: 5px; */
      border-radius: 10px;
      width: 95%;
      /* margin: auto; */
      /* height: 50%; */
   }
   .brandDesc {
      font-size: 30px;
      width: 95%;
      /* margin-top: 50px; */
      /* word-wrap: inherit; */
      margin: auto;
      margin-top: 30px;
      font-weight: 600;
      text-align: justify;

      /* line-height: 60px; */
      /* float: left; */
      /* text-align: center; */
      /* text-align: justify; */
   }
   .allCollection {
      border: black 1px solid;
      float: left;
      /* height: 50px; */
      font-size: 25px;
      line-height: 30px;
      margin: 3px;
      padding: 2px 10px;
      /* position: relative; */
      width: fit-content;
      border-radius: 50px;
      align-items: center;
   }
   .shopSection {
      margin: 20px;
   }
   .shopSection > h1 {
      font-weight: 800;
      margin: 20px 0;
   }
   .lastDiv {
      display: flex;
      gap: 20px;
      padding: 20px;
   }
   .lastDiv > img {
      filter: grayscale(100%);
      width: 30%;
      border-radius: 20px;
   }
   .orangeDiv {
      width: 70%;
      /* display: ; */
      border-radius: 30px;
      padding: 30px;
      font-weight: 600;
      background-color: #5c6bc0;
   }
   .orangeDiv > h1 {
      font-weight: 900;
      font-size: 50px;
   }

   .lastIcons {
      background-color: #5b1c1c;
      width: fit-content;
      border-radius: 50%;
      padding: 8px;
   }
   .flexIcon {
      display: flex;
      gap: 20px;
      padding: 10px 0;
   }
   .flexIcon > h3 {
      margin-top: 2px;
      font-weight: 600;
   }
   .missionDiv {
      padding: 20px;
      /* width: 40% */
   }
   .VisionDiv {
      display: flex;
      justify-content: space-between;
   }
   .yourDesign {
      margin: 30px auto;
      font-weight: 900;
      text-align: justify;
      width: 90%;
   }
   .Mvedio {
      border-radius: 20px;
      /* height: fit-content; */
      margin: 20px auto;

      /* background-color: white; */
   }
   .hrline {
      color: black;
   }
   @media only screen and (max-width: 1024px) {
      .topImages {
         grid-template-columns: repeat(1, 1fr);
      }
      .nextImages > img {
         /* height: 200px; */
      }
      .topImages {
         /* height: 300px; */
      }
      .capsImage > img {
         /* padding: 5px; */
         border-radius: 10px;
         /* width: 49%; */

         /* margin: auto; */
         /* height: 50%; */
      }
      .brandDesc {
         font-size: 20px;
         /* margin-top: 400px; */
         text-align: justify;
      }
      .allCollection {
         font-size: small;
      }
      .VisionDiv {
         flex-direction: column;
      }
      .lastDiv {
         flex-direction: column;
      }
      .orangeDiv {
         width: 100%;
         padding: 15px 10px;
      }
      .orangeDiv > h1 {
         /* font-weight: 900; */
         font-size: 20px;
         margin: 10px;
      }
      .flexIcon {
         gap: 5px;
         /* font-weight: 400; */
         /* font-size: larger; */
      }
      .flexIcon > h3 {
         font-size: larger;
      }
      .lastDiv > img {
         width: 100%;
      }
      .missionDiv {
         padding: 10px;
      }
      .yourDesign {
         /* font-weight: 600; */
         font-size: x-large;
      }
   }
`;
