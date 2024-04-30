import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {PRODUCTS} from '../../PRODUCTS';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function Store () {
  return (
    <div>
      <h1 align="center" className="p-3 mb-5">Welcome to Store</h1>

      <Row xs={1} md={3} className="g-4 ">
        {PRODUCTS.map ((product, index) => (
          <Col align="center" key={index} className="mb-5">
            <ProductCard product={product} />

          </Col>
        ))}

      </Row>
    </div>
  );
}
