import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProductItem from "./product-item";
import "../../assets/css/components/product/product-list.css";

const ProductList = ({ action }) => {
  const { allDataJson } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              products {
                sku
                title
                price
                image
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className="product-list grid-x grid-margin-y">
      <h1>Product</h1>
      {allDataJson.edges[0].node.products.map(product => (
        <ProductItem {...product} key={product.sku} action={action} />
      ))}
    </div>
  );
};
export default ProductList;
