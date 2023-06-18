import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import AllRoutes from "./component/AllRoutes"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
