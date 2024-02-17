import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';
import menuIcon from './assets/menu_icon1.png';

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="settle-button-container">
      <Button variant="btn btn-outline" onClick={handleShow} >
        <img src={menuIcon} width={35} alt="menu" className="menu-icon" />
      </Button>
      <br/><br/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title class>Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body class="nav flex-column nav nav-underline nav nav-tabs ">
        <div className="offcanvas-navbar">
        <Link to="/" className="btn btn-outline-dark d-grid gap-2 col-6 mx-auto" onClick={handleClose}>Home</Link><br/><br/>
        <Link to="/cart" className="btn btn-outline-dark d-grid gap-2 col-6 mx-auto" onClick={handleClose}>My Cart</Link><br/><br/>
        <Link to="/contact" className="btn btn-outline-dark d-grid gap-2 col-6 mx-auto" onClick={handleClose}>Contact</Link><br/><br/>
      </div>
      
      {/* Settle Button shown in all components but outside the offcanvas */}
      <div className="settle-button">
        {/* <Link to="/settle" className="btn btn-outline-dark" onClick={handleClose}>Settle</Link> */}
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Nav;

