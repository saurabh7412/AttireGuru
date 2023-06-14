import React from 'react';
import styled from 'styled-components';

type Filters = {
  gender: string[];
  category: string[];
  color: string[];
};

const SidebarContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
`;

const FilterSection = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const FilterOption = styled.div`
  margin-bottom: 5px;
`;

const FilterCheckbox = styled.input`
  margin-right: 5px;
`;

const SortingSection = styled.section`
  margin-bottom: 20px;
`;

const SortingOption = styled.option``;

type SidebarProps = {
  selectedFilters: Filters;
  updateFilters: (filters: Filters) => void;
};

const Sidebar = ({ selectedFilters, updateFilters }: SidebarProps) => {
  const handleFilterChange = (type: keyof Filters, value: string, checked: boolean) => {
    const filters = { ...selectedFilters };
    if (checked) {
      filters[type].push(value);
    } else {
      filters[type] = filters[type].filter((item) => item !== value);
    }
    updateFilters(filters);
  };

  return (
    <SidebarContainer>
      <FilterSection>
        <SectionTitle>Gender</SectionTitle>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.gender.includes('Men')}
            onChange={(e) => handleFilterChange('gender', 'Men', e.target.checked)}
          />
          Men
        </FilterOption>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.gender.includes('Women')}
            onChange={(e) => handleFilterChange('gender', 'Women', e.target.checked)}
          />
          Women
        </FilterOption>
      </FilterSection>

      <FilterSection>
        <SectionTitle>Category</SectionTitle>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.category.includes('Clothing')}
            onChange={(e) => handleFilterChange('category', 'Clothing', e.target.checked)}
          />
          Clothing
        </FilterOption>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.category.includes('Shoes')}
            onChange={(e) => handleFilterChange('category', 'Shoes', e.target.checked)}
          />
          Shoes
        </FilterOption>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.category.includes('Accessories')}
            onChange={(e) => handleFilterChange('category', 'Accessories', e.target.checked)}
          />
          Accessories
        </FilterOption>
      </FilterSection>

      <FilterSection>
        <SectionTitle>Color</SectionTitle>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.color.includes('Red')}
            onChange={(e) => handleFilterChange('color', 'Red', e.target.checked)}
          />
          Red
        </FilterOption>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.color.includes('Blue')}
            onChange={(e) => handleFilterChange('color', 'Blue', e.target.checked)}
          />
          Blue
        </FilterOption>
        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            checked={selectedFilters.color.includes('Green')}
            onChange={(e) => handleFilterChange('color', 'Green', e.target.checked)}
          />
          Green
        </FilterOption>
      </FilterSection>

      <SortingSection>
        <SectionTitle>Sort By</SectionTitle>
        <select>
          <SortingOption>Price: Low to High</SortingOption>
          <SortingOption>Price: High to Low</SortingOption>
        </select>
      </SortingSection>
    </SidebarContainer>
  );
};

export default Sidebar;
