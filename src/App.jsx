import { useState } from 'react';
import SideNav from './component/navbars/SideNav';
import NavBar from './component/navbars/NavBar';
import Menu from './component/Menu';
import TableService from './component/TableService';
import Accounting from './component/Accounting';
import Delivery from './component/Delivery';
import Reservation from './component/Reservation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <NavBar />
      <SideNav/>
      
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tableservice" element={<TableService />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </Router>
  );
}

export default App;
