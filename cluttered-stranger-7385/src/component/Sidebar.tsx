import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

interface SidebarProps {}

const SidebarContainer = styled.div`
  width: 200px;
  padding: 25px;
  background-color: #f2f2f2;
  padding-right: 60px;
  margin-right: 60px;
  text-align: start;
  border-radius : 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  curser:pointer;
  label {
    margin-left: 8px;
  }
`;
const ClearAll = styled.span`
  color: red;
  cursor: pointer;
`;
const Sidebar: React.FC<SidebarProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.getAll("category");
  const initialGen = searchParams.getAll("gender");
  const [initialOrder] = searchParams.getAll("order");
  const initialColor=searchParams.getAll("color")
  const [category, setCategory] = useState<string[]>(initialCat || []);
  const [gender, setGender] = useState<string[]>(initialGen || []);
  const [order, setOrder] = useState<string>(initialOrder || "");
  const [selectedColors, setSelectedColors] = useState<string[]>(initialColor || []);
  const colors = ["Maroon", "Black", "Olive", "Multi","Peach","Yellow","Pink","Green","Nevy","White","Blue","Cream","Brown",];
  useEffect(() => {
    const params: Partial<{ category: string[]; gender: string[]; order: string ;color: string[]}> = { category, gender ,color: selectedColors};
    order && (params.order = order);
    setSearchParams(params);
  }, [category, gender, order, setSearchParams,selectedColors]);

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newCat = [...category];
    if (newCat.includes(value)) {
      newCat = newCat.filter((el) => el !== value);
    } else {
      newCat.push(value);
    }
    setCategory(newCat);
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { value } = e.target;
   let newColors = [...selectedColors];
   if (newColors.includes(value)) {
     newColors = newColors.filter((color) => color !== value);
   } else {
     newColors.push(value);
   }
   setSelectedColors(newColors);
 };
 const handleClearAll = () => {
   setCategory([]);
   setGender([]);
   setOrder("");
   setSelectedColors([]);
 }
  return (
    <SidebarContainer>
      <ClearAll onClick={handleClearAll}>CLEAR ALL</ClearAll>
      <Title>Filter By Gender</Title>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="genderCheckboxMale"
          value="male"
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label htmlFor="genderCheckboxMale">Men</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="genderCheckboxFemale"
          value="female"
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label htmlFor="genderCheckboxFemale">Women</label>
      </CheckboxContainer>
      
      <Title>Filter By Color</Title>
      {colors.map((color) => (
        <CheckboxContainer key={color}>
          <input
            type="checkbox"
            id={`colorCheckbox_${color}`}
            value={color}
            checked={selectedColors.includes(color)}
            onChange={handleColor}
          />
          <label htmlFor={`colorCheckbox_${color}`}>{color}</label>
        </CheckboxContainer>
      ))}
      <Title>Filter By Category</Title>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="categoryCheckbox1"
          value="shirt"
          onChange={handleCategory}
          checked={category.includes("shirt")}
        />
        <label htmlFor="categoryCheckbox1">shirts</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="categoryCheckbox1"
          value="kurtas"
          onChange={handleCategory}
          checked={category.includes("kurtas")}
        />
        <label htmlFor="categoryCheckbox1">kurtas</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="categoryCheckbox1"
          value="dress-material"
          onChange={handleCategory}
          checked={category.includes("dress-material")}
        />
        <label htmlFor="categoryCheckbox1">dress-material</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="categoryCheckbox1"
          value="sarees"
          onChange={handleCategory}
          checked={category.includes("sarees")}
        />
        <label htmlFor="categoryCheckbox1">sarees</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="categoryCheckbox1"
          value="jeans"
          onChange={handleCategory}
          checked={category.includes("jeans")}
        />
        <label htmlFor="categoryCheckbox1">jeans</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="categoryCheckbox1"
          value="shoes"
          onChange={handleCategory}
          checked={category.includes("shoes")}
        />
        <label htmlFor="categoryCheckbox1">shoes</label>
      </CheckboxContainer>
      
      {/* Other category checkboxes go here */}

      <Title>Sort By</Title>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="sortingCheckboxAscending"
          value="asc"
          onChange={(e) => setOrder(e.target.value)}
          checked={order === "asc"}
        />
        <label htmlFor="sortingCheckboxAscending">Ascending</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="sortingCheckboxDescending"
          value="desc"
          onChange={(e) => setOrder(e.target.value)}
          checked={order === "desc"}
        />
        <label htmlFor="sortingCheckboxDescending">Descending</label>
      </CheckboxContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
