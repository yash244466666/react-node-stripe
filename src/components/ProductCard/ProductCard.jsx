import React from 'react';
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../../CartContext';
import {useContext} from 'react';

export default function ProductCard (props) {
  const product = props.product;
  const cart = useContext (CartContext);
  const productQty = cart.getProductQty (product.id);

  return (
    <div>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          {productQty > 0
            ? <Form as={Row}>
                <Form.Label column="true" sm="6">
                  {' '}In cart: {productQty}
                </Form.Label>
                <Col sm="6">
                  <Button
                    sm="6"
                    onClick={() => cart.removeOneFromCart (product.id)}
                    className="m-2"
                  >
                    -
                  </Button>
                  <Button
                    sm="6"
                    onClick={() => cart.addOneToCart (product.id)}
                    className="m-2"
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    sm="6"
                    onClick={() => cart.deleteFromCart (product.id)}
                    className="m-2"
                  >
                    Remove
                  </Button>

                </Col>

              </Form>
            : <Button
                variant="primary"
                onClick={() => cart.addOneToCart (product.id)}
              >
                Add to Cart
              </Button>}

        </Card.Body>
      </Card>
    </div>
  );
}
