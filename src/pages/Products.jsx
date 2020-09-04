import React, { Fragment } from 'react';
import './Products.scss';

const Products = () => {

  async function getCompras(url) {
    try {
      await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
    } catch (err) {
      console.error('err', err);
    }
  }

  const dataRes = getCompras('http://localhost:3003/api/compras')
  console.log(dataRes)

  return(
    <Fragment>
      <h1>List of Products</h1>
    </Fragment>
  )
}

export default Products;
