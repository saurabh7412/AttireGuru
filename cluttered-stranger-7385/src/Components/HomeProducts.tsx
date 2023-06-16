import { useState } from "react"
import styled from "styled-components"
import {HomeProductCart} from "./HomeProductCart" 
export const HomeProduct = ( ) =>{
    const all =[
        {
            "id": "1",
            "title": "IVOC",
            "description": "Slim Fit Shirt with Patch Pocket",
            "price": 671,
            "color": "Black",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220819/Qm9w/62fe856aaeb269176183efe0/ivoc_black_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "2",
            "title": "THE INDIAN GARAGE CO",
            "description": "Striped Slim Fit Shirt with Patch Pocket",
            "price": 624,
            "color": "White",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20211023/dEWu/61730697aeb2690110a3a43d/the_indian_garage_co_white_striped_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "3",
            "title": "THE BEAR HOUSE",
            "description": "Slim Fit Shirt with Patch Pocket",
            "price": 1297,
            "color": "White",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/sNUJ/627e1e7af997dd03e2b93cf7/the_bear_house_white_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "4",
            "title": "THE BEAR HOUSE",
            "description": "Checked Slim Fit Shirt with Patch Pocket",
            "price": 1372,
            "color": "Grey",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/uxVC/627e237cf997dd03e2b9b21b/the_bear_house_grey_checked_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "5",
            "title": "THE BEAR HOUSE",
            "description": "Checked Shirt with Patch Pocket",
            "price": 1248,
            "color": "Black",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/JX26/627e20e6aeb26921af768b7d/the_bear_house_black_checked_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "6",
            "title": "DENNISLINGO PREMIUM ATTIRE",
            "description": "Checked Slim Fit Shirt",
            "price": 800,
            "color": "Blue",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20221109/SI6r/636b8e9af997ddfdbd663ee4/dennislingo_premium_attire_blue_checked_slim_fit_shirt.jpg"
          }
    ]
    type product={
      id: string;
      title: string;
      description: string;
      price: number;
      color: string;
      gender: string;
      category: string;
      image: string;
    }
    
    const [homeData, setData] = useState<product[]>(all)
    const [current,setCurrent] = useState<string>("all")
    
    
    const newArrival =[
        {
            "id": "7",
            "title": "DENNISLINGO PREMIUM ATTIRE",
            "description": "Full Sleeves Slim Fit Shirt",
            "price": 610,
            "color": "Green",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20230102/wJfs/63b2fe3eaeb269659c1e09e8/dennislingo_premium_attire_green_full_sleeves_slim_fit_shirt.jpg"
          },
          {
            "id": "8",
            "title": "THE BEAR HOUSE",
            "description": "Checked Button-down Shirt",
            "price": 1248,
            "color": "Blue",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/2a7U/627e22b4f997dd03e2b9a1f2/the_bear_house_blue_checked_button-down_shirt.jpg"
          },
          {
            "id": "9",
            "title": "THE INDIAN GARAGE CO",
            "description": "Checked Slim Fit Shirt",
            "price": 612,
            "color": "Khaki",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/h3b/h74/15814258327582/the_indian_garage_co_blue_checked_slim_fit_shirt.jpg"
          },
          {
            "id": "10",
            "title": "LEE COOPER",
            "description": "Shirt with Flap Pockets",
            "price": 1000,
            "color": "Olive",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20221118/0ScG/637727eef997ddfdbd82d944/lee_cooper_olive_shirt_with_flap_pockets.jpg"
          },
          {
            "id": "11",
            "title": "GESPO",
            "description": "Shirt with Curved Hemline",
            "price": 432,
            "color": "Black",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220121/XNDG/61ea64b3aeb2695cdd24fb24/gespo_black_shirt_with_curved_hemline.jpg"
          },
          {
            "id": "12",
            "title": "7SHORES",
            "description": "Printed Slim Fit Shirt",
            "price": 749,
            "color": "Multi White",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20211125/Vndi/619ecbd2f997ddf8f11a491c/7shores_white_printed_slim_fit_shirt.jpg"
          }
    ]
    const bestSellet =[
        {
            "id": "13",
            "title": "THE BEAR HOUSE",
            "description": "Slim Fit Checked Shirt",
            "price": 1248,
            "color": "Maroon",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/5arK/627e2306aeb26921af76b77c/the_bear_house_maroon_slim_fit_checked_shirt.jpg"
          },
          {
            "id": "14",
            "title": "THE BEAR HOUSE",
            "description": "Checked Slim Fit Shirt with Patch Pocket",
            "price": 1372,
            "color": "Multi",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/9JDC/627e2478f997dd03e2b9c6d8/the_bear_house_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "15",
            "title": "LOUIS MONARCH",
            "description": "Striped Regular Fit Shirt",
            "price": 608,
            "color": "Blue",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20211028/dScI/6179bb83aeb2690110ae1715/louis_monarch_blue_striped_regular_fit_shirt.jpg"
          },
          {
            "id": "16",
            "title": "THE BEAR HOUSE",
            "description": "Solid Slim Fit Shirt",
            "price": 1372,
            "color": "Olive",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/LjSc/627e2482f997dd03e2b9c7c2/the_bear_house_olive_solid_slim_fit_shirt.jpg"
          },
          {
            "id": "17",
            "title": "THE INDIAN GARAGE CO",
            "description": "Spread Collar Shirt with Patch Pocket",
            "price": 612,
            "color": "Peach",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20230127/IqdQ/63d3b8a6aeb269c651fd34c1/the_indian_garage_co_pink_spread_collar_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "18",
            "title": "DILLINGER",
            "description": "Cotton Shirt with Patch Pocket",
            "price": 720,
            "color": "Pink",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220810/IFWX/62f2dd6faeb26921afd91a8c/dillinger_pink_cotton_shirt_with_patch_pocket.jpg"
          }
    ]
    const flashSale =[
        {
            "id": "19",
            "title": "DENNISLINGO PREMIUM ATTIRE",
            "description": "Slim Fit Shirt with Patch Pocket",
            "price": 610,
            "color": "Green",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20221117/k3qL/6375d6bdf997ddfdbd7fae30/dennislingo_premium_attire_green_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "20",
            "title": "NETPLAY",
            "description": "Slim Fit Shirt with Band Collar",
            "price": 390,
            "color": "Nevy",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20211230/Ghkh/61ccba9af997ddf8f168a160/netplay_navy_blue_slim_fit_shirt_with_band_collar.jpg"
          },
          {
            "id": "21",
            "title": "THE INDIAN GARAGE CO",
            "description": "Checked Slim Fit Shirt with Patch Pocket",
            "price": 612,
            "color": "White",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20210316/9gAe/604fab51aeb2696981863192/the_indian_garage_co_white_checked_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "22",
            "title": "DENNISLINGO PREMIUM ATTIRE",
            "description": "Slim Fit Shirt with Patch Pocket",
            "price": 610,
            "color": "Blue",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20221109/0Xvw/636b8d94f997ddfdbd662124/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "23",
            "title": "THE INDIAN GARAGE CO",
            "description": "Checked Slim Fit Shirt with Patch Pocket",
            "price": 612,
            "color": "Black",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20210316/US2Q/604fb159f997dd5c401159c2/the_indian_garage_co_black_checked_slim_fit_shirt_with_patch_pocket.jpg"
          },
          {
            "id": "24",
            "title": "THE BEAR HOUSE",
            "description": "Striped Slim Fit Linen Shirt",
            "price": 1372,
            "color": "Cream",
            "gender": "male",
            "category": "shirt",
            "image": "https://assets.ajio.com/medias/sys_master/root/20220513/uQMj/627e246ef997dd03e2b9c619/the_bear_house_cream_striped_slim_fit_linen_shirt.jpg"
          }
    ]
    // const [active,setactive]=useState(false)
    // const showInfo = () =>{
    //     setactive(true)
    // }

    const handleChange = (prop:string) =>{
        setCurrent(prop)
        if(prop === "flash"){
            setData(flashSale)
        }
        else if(prop === "new"){
            setData(newArrival)
        }
        else if(prop === "best"){
            setData(bestSellet)
        }
        else{
            setData(all)
        }
        
    }

    return <MAINDIV>
         <div className="filterSection">
            <div onClick={()=> handleChange("all")} style={{ color : current === "all" ? "white" : "black" , background : current !== "all" ? "white" : " #5c6bc0"}}  >All</div>
            <div onClick={()=> handleChange("new")} style={{ color : current === "new" ? "white" : "black" , background : current !== "new" ? "white" : " #5c6bc0"}}>NEW ARRIVALS</div>
            <div onClick={()=>handleChange("best")}  style={{ color : current === "best" ? "white" : "black" , background : current !== "best" ? "white" : " #5c6bc0"}}> BEST SELLERS</div>
            <div onClick={()=>handleChange("flash")}  style={{ color : current === "flash" ? "white" : "black" , background : current !== "flash" ? "white" : " #5c6bc0"}}>FLASH SALE</div>
        </div>
         <PRODUCTS>
       
        {homeData.map((el,index)=>(
            <HomeProductCart key={index}  title={el.title} price= {el.price} image={el.image} />
        ))}
    



    </PRODUCTS>
    </MAINDIV>
    
   
}

const MAINDIV = styled.div`
    .filterSection{
        display: flex;
        margin: 10px 0; 
    }
    .filterSection > div{
        border: 1px solid black;
        width: fit-content;
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 20px;
        font-weight: 600;
    }
    @media only screen and (max-width: 1024px) {
    .filterSection > div{
        font-size: 10px;
        font-weight: 300;
    }
    }

`

const PRODUCTS = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;
.orangePrice{
    color: #ff8800;
    margin: 10px;
    font-weight: 600;
    /* font-size: larger; */
}
.proName{
    margin: 10px;
    font-weight: 600;
}
.proDiv{
    width: 100%;
}
.proDiv > img {
    border-radius: 40px;
    width: 100%;
}
.proDiv > div{
    display: flex;
    justify-content: space-between;
}
.Pcolors{
    display: flex;
    gap: 5px;
    margin: 10px;
}
.Pcolors > div{
    height: 20px;
    width: 20px;
    
    border-radius: 50%;
}
.Pcolors > div:hover{
 border: 1px black solid;
}
.Pcolors :nth-child(1){
    background-color: grey ;
}
.Pcolors :nth-child(2){
    background-color: #c3991c ;
}
.Pcolors :nth-child(3){
    background-color: #950000 ;
}
.active{
    border: 1px solid black;
} 
@media only screen and (max-width: 1024px) {
grid-template-columns: repeat(2,45%);
}
.proName, .orangePrice{
    font-size: small;
}
.Pcolors > div{
    height: 10px;
    width: 10px;

}
.Pcolors{
    margin: 0px 10px;
}
.proDiv > img {
    border-radius: 20px;
    /* width: 100%; */
}
.proDiv > div{
    flex-direction: column;
}

`