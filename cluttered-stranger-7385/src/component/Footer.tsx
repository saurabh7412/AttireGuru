import React from "react";
import {
  Box,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
  List,
  Input,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import styled from "styled-components";

const Footer = () => {
  return (
    <DIV>
      <div className="fDiv">
        <h3>REAL DESIGNS BY REAL ARISTS</h3>
        <h3>FOR REAL PEOPLE</h3>
      </div>

      <div className="footerAbout">
        <div>
          <h3>PRODUCT</h3>
          <p>Jacket</p>
          <p>Shirt</p>
          <p>T-shirt</p>
          <p>Dresses</p>
          <p>Outwear</p>
          <p>Bottoms</p>
        </div>
        <div>
          <h3>BUYING</h3>
          <p>Shop</p>
          <p>Term of Use</p>
          <p>Privacy</p>
          <p>How & works</p>
          <p>Customer Services</p>
        </div>
        <div>
          <h3>SOCIAL</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twetter</p>
        </div>
      </div>

      <div className="footerEmail">
        <Input
          _placeholder={{ opacity: 1, color: "white" }}
          borderRadius={20}
          placeholder="EMAIL ADDRESS"
        />
        <Button colorScheme="orange" borderRadius={20}>
          Send
        </Button>
      </div>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  background-color: #5c6bc0;
  color: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  // border: 2px solid red;
  margin-top: 40px;

  h3 {
    font-weight: 600;
    color: black;
  }

  .fDiv > img {
    height: 60px;
    border-radius: 20px;
    /* display: flex; */
  }
  input {
    color: white;
  }

  .footerAbout {
    display: flex;
    gap: 30px;
    line-height: 20px;
    justify-content: space-between;
  }
  .footerAbout p {
    color: white;
  }

  .fDiv > h5 {
    margin: 10px 0;
  }

  .footerEmail {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  /* background-color: #5c6bc0; */
  /* background-color: #283593;  button */

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    input {
      height: 30px;
      font-size: x-small;
    }
    button {
      height: 30px;
      font-size: smaller;
    }

    .footerAbout p {
      font-size: small;
    }
    .fDiv > h5,
    .footerAbout h5 {
      font-size: small;
    }
    .fDiv > img {
      width: 50%;
      border-radius: 20px;
    }
    .footerEmail {
      display: flex;
    }
  }
`;
