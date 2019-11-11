import React from "react";

const CardItem = product => {
  const cartIsActive = product.type === "carlist";
  const hideMe = JSON.parse(localStorage.getItem("cart")).find(
    i => i.sku === product.sku && !cartIsActive
  );
  return (
    <div
      className={`product cell small-12 grid-x grid-margin-x ${hideMe &&
        "hide"}`}
      id={product.sku}
    >
      <div className="product-image cell small-2">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-title cell small-4">{product.title}</div>
      <div className="product-sku cell small-2">{product.sku}</div>
      <div className="product-price cell small-2">${product.price}</div>
      <div className="product-add-to-cart cell small-2">
        <button id="add-to-cart" onClick={() => product.remove(product.sku)}>
          {!cartIsActive ? "Add to Cart" : "Remove From Cart"}
        </button>
      </div>
    </div>
  );
};

export default CardItem;
