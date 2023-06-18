import React, { useState } from "react";
import { styled } from "styled-components";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useToast } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { addNewProduct } from "../Redux/action";
import random from "../Images/random.jpg";
import { useSelector } from "react-redux";
import halt from "../Images/unrecognized.jpg"

const initial = {
  title: "",
  image: "",
  category: "",
  color: "",
  description: "",
  price: 0,
  gender: "",
  brand: "",
  fabric: "",
  fit: "",
  pattern: "",
  rating: 0,
};

const AddProduct = () => {
  const [singleProd, setNewData] = useState(initial);

  const isAuth = useSelector((store: any) => store.AuthReducer.isAuth);

  const navigate = useNavigate();

  const toast = useToast()

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    const updatedData = {
      ...singleProd,
      [name]: name === "price" ? +value : value,
    };

    setNewData(updatedData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(singleProd);

      addNewProduct(singleProd).then((res) => {
        console.log(res.data);

        toast({
          title: `Product Added Successfully !`,
          description: "One Product got added !",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })

        navigate(`/AllProducts`)
      });
  };
  return (
    <>
    {isAuth && <div>
      <MAINDIV>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={"/Dashboard"}>
                <span>Dashboard</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span>Add New Product</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </MAINDIV>

      <DIV>

        <img id="random" src={random}/>

        <form id="form" onSubmit={handleSubmit}>
          <div className="inp">
            <label>Title: </label>
            <input
              placeholder="Title"
              size={50}
              type={"text"}
              value={singleProd.title}
              name={"title"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Image Url: </label>
            <input
              placeholder="Image URL"
              size={50}
              type={"text"}
              value={singleProd.image}
              name={"image"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Category: </label>
            <input
              placeholder="Category"
              size={50}
              type={"text"}
              value={singleProd.category}
              name={"category"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Color: </label>
            <input
              placeholder="Color"
              size={50}
              type={"text"}
              value={singleProd.color}
              name={"color"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Description: </label>
            <input
              placeholder="Description"
              size={50}
              type={"text"}
              value={singleProd.description}
              name={"description"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Price: </label>
            <input
              placeholder="Price"
              size={50}
              type={"number"}
              value={singleProd.price}
              name={"price"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Gender: </label>
            <select
              onChange={handleChange}
              value={singleProd.gender}
              name="gender"
            >
              <option value={""}>Select Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
            <br />
          </div>

          <div className="inp">
            <label>Brand: </label>
            <input
              placeholder="Brand"
              size={50}
              type={"text"}
              value={singleProd.brand}
              name={"brand"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Fabric: </label>
            <input
              placeholder="Fabric"
              size={50}
              type={"text"}
              value={singleProd.fabric}
              name={"fabric"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Fit: </label>
            <input
              placeholder="Fit"
              size={50}
              type={"text"}
              value={singleProd.fit}
              name={"fit"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Pattern: </label>
            <input
              placeholder="Pattern"
              size={50}
              type={"text"}
              value={singleProd.pattern}
              name={"pattern"}
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="inp">
            <label>Rating: </label>
            <select
              onChange={handleChange}
              value={singleProd.rating}
              name="rating"
            >
              <option value={""}>Select Rating</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
            <br />
          </div>

          <div className="inp">
            <label>Size: </label>
            <select onChange={handleChange} name="sizes">
              <option value={""}>Select Size</option>
              <option value={"S"}>Small</option>
              <option value={"M"}>Medium</option>
              <option value={"L"}>Large</option>
              <option value={"XL"}>Xtra-Large</option>
            </select>
            <br />
          </div>

          <button type="submit" id="updatebtn">
            Update Product
          </button>
        </form>
      </DIV>

      </div>}
      <DIV>{!isAuth && <img id="halt" src={halt}/>}</DIV>
    </>
  );
};

export default AddProduct;

const MAINDIV = styled.div`
  width: 90%;
  margin: auto;
  justify-content: start;

  span {
    color: #5c6bc0;
    font-size: 18px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  span:hover {
    scale: 1.1;
    transition: 500ms;
  }
`;

const DIV = styled.div`
  width: 90%;
  margin-left: 50px;
  margin-top: 50px;
  display: flex;
  margin-bottom: 50px;
  align-items:center;

  #halt{
    text-align: center;
    margin-left: 35%;
    margin-top: 150px;
    scale: 1.2;
  }
  

  #updatebtn {
    background-color: #283593;
    color: white;
    padding: 4px 20px;
    border-radius: 15px;
  }
  #updatebtn:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 500ms;
  }
  #random{
    width: 23%;
    height: 23%;
    display: flex;
    box-shadow: rgba(10, 5, 2, 0.24) 0px 3px 8px;
    border-radius: 20px;
  }
  #random: hover{
    scale: 1.2;
    transition : 500ms;
  }

  #form {
    width: 75%;
    margin-left: 50px;
    padding: 20px;
    background-color: #c5cae9;
    box-shadow: rgba(10, 5, 2, 0.24) 0px 3px 8px;
    border-radius: 20px;
  }

  .inp {
    width: 70%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
  }
  .inp label {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    color: #283593;
  }
  .inp input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    padding: 2px 10px;
    border-radius: 10px;
  }
  .inp input:focus {
    scale: 1.1;
    transition: 500ms;
    border-radius: 10px;
  }
`;
