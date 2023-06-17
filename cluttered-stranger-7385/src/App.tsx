import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Admin/Components/NavBar';
import AllRoutes from './component/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
