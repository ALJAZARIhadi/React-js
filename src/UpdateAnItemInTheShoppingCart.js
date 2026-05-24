// This is the solutioon of the Challenge 1 of 4: Update an item in the shopping cart 
//Updatin Arrays in State 

import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

   function handleIncreaseClick(productId) {
    const newProducts =products.map((Product) => {
      if(Product.id == productId)
        {
          let newProduct = {...Product,count: Product.count +1}
          return newProduct;
        }else{
          return Product
        }
    });
     setProducts(newProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
