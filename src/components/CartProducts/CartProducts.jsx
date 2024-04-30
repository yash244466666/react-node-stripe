import React from 'react';
import {Button} from 'react-bootstrap';
import {CartContext} from '../../CartContext';
import {useContext} from 'react';
import {getProducts} from '../../PRODUCTS';

export default function CartProducts (props) {
  const cart = useContext (CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const prodData = getProducts (id);

  return (
    <React.Fragment>
      <div>
        <h2>{prodData.name}</h2>
        <h3>${prodData.price}</h3>
        <h3>Quantity: {quantity}</h3>
        <Button onClick={() => cart.addOneToCart (id)} className="m-1">
          +
        </Button>
        <Button onClick={() => cart.removeOneFromCart (id)} className="m-1">
          -
        </Button>
        <Button
          onClick={() => cart.deleteFromCart (id)}
          className="m-1"
          variant="danger"
        >
          Remove
        </Button>
      </div>
      <hr />
    </React.Fragment>
  );
}
