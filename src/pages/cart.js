import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CartList from "../components/product/cart-list";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }

  componentDidMount() {
    localStorage.cart &&
      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
  }

  render() {
    return (
      <Layout>
        <SEO title="Cart" pageType="cartpage" />
        <CartList />
      </Layout>
    );
  }
}

export default Cart;
