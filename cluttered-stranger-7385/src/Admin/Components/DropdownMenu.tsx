import React, { useState } from 'react';
import { styled } from 'styled-components';

type User = {
  name: string;
  image: string;
};

const DropdownMenu: React.FC<{ user: User }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSettingsClick = () => {
    // Handle settings click
  };

  const handleLogoutClick = () => {
    // Handle logout click
  };

  return (
    <DIV className="dropdown">
      <div className="dropdown-toggle" onClick={handleToggle}>
        <img src={user.image}  className="avatar" />
        <span className="name">{user.name}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="option" onClick={handleSettingsClick}>
            
            <span className="text">Settings</span>
          </div>
          <div className="option" onClick={handleLogoutClick}>
            
            <span className="text">Logout</span>
          </div>
        </div>
      )}
    </DIV>
  );
};

export default DropdownMenu;


const DIV = styled.div`

.dropdown-toggle{
    display: flex;
    align-items : center;
}

.avatar{
width : 10%;
border-radius: 50%;
}
`
