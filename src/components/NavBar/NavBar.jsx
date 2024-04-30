import React from 'react';
import {Container, Nav, Navbar, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import {CartContext} from '../../CartContext';
// import {PRODUCTS} from '../../PRODUCTS';
import CartProducts from '../CartProducts/CartProducts';

function NavBar () {
  const cart = useContext (CartContext);
  const [show, setShow] = useState (false);
  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);
  const prodCnt = cart.item.reduce ((sum, prod) => sum + prod.quantity, 0);
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <Navbar.Brand>React Store</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Link to="/success">
                <Nav.Link href="/success">Success</Nav.Link>
              </Link>
              <Link to="/cancel">
                <Nav.Link href="/cancel">Cancel</Nav.Link>
              </Link>

              <button className="btn btn-danger" onClick={handleShow}>
                {' '}Cart {prodCnt} Items{' '}
              </button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {prodCnt > 0
            ? <div>
                {cart.item.map ((product, index) => (
                  <CartProducts
                    key={index}
                    id={product.id}
                    quantity={product.quantity}
                  />
                ))}
                <h2>Total: ${cart.getTotalCost ()}</h2>
                <Button variant="success">Checkout</Button>

              </div>
            : <div>
                <h1>Your cart is empty</h1>
              </div>}
        </Modal.Body>
      </Modal>

    </React.Fragment>
  );
}

export default NavBar;
