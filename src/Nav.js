import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Menu
      </Button>
      <br/><br/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title class>Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body class="nav flex-column nav nav-underline nav nav-tabs">
          <Link to="/" type="button" class="btn btn-outline-dark" onClick={handleClose}>Home</Link><br/><br/>
          <Link to="/cart" type="button" class="btn btn-outline-dark" onClick={handleClose}>My Cart</Link><br/><br/>
          <Link to="/contact" type="button" class="btn btn-outline-dark" onClick={handleClose}>Contact</Link><br/><br/>
          <Link to="/settle" type="button" class="btn btn-outline-dark" onClick={handleClose}>Settle</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Nav;

