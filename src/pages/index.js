import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/product/product-list";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Products"
          pageType="productspage"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <h1>Cart</h1>
        <ProductList />
      </Layout>
    );
  }
}

export default IndexPage;
