const PRODUCTS = [
  {id: 1, name: 'Product 1', price: 100},
  {id: 2, name: 'Product 2', price: 200},
  {id: 3, name: 'Product 3', price: 300},
];

const getProducts = id => {
  let productData = PRODUCTS.find (product => product.id === id);

  if (productData === undefined) {
    productData = {name: 'Product not found', price: 0};
  }

  return productData;
};

export {PRODUCTS, getProducts};
