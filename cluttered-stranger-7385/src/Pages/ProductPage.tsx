import Sidebar from "../component/Sidebar";
import ProductSection from "../component/productSection";

export default function ProductPage(){
return <><div style={{display:"flex", margin:"auto", justifyContent:"space-around", paddingTop:"100px"}}>
   <Sidebar/>
   <ProductSection/>
   </div></>
}