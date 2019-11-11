import React from "react";
import CardItem from "./card-item";
import "../../assets/css/components/product/product-list.css";

const ProductList = ({ remove, cart }) => {
  const formatTotal = x => Number.parseFloat(x).toFixed(2);
  const calculateTotal = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <div className="product-list grid-x grid-margin-y">
        <h1>Cart</h1>
        {cart.map(product => (
          <CardItem
            {...product}
            key={product.sku}
            remove={remove}
            type="carlist"
          />
        ))}
      </div>
      <h3 style={{ marginTop: `2em` }}>
        Total: ${formatTotal(calculateTotal)}
      </h3>
    </>
  );
};
export default ProductList;
