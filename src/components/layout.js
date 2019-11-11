import React, { Component } from "react";
import Helmet from "react-helmet";

import Header from "./header";
import Data from "../lib/data/products.json";
import "../assets/css/layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    if (!localStorage.cart) {
      localStorage.setItem("cart", "[]");
    }
  }

  componentDidMount() {
    if (localStorage.cart) {
      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
    }
  }

  addProduct = id => {
    const productToAdd = Data.products.find(i => i.sku === id);
    const oldCart = JSON.parse(localStorage.getItem("cart"));

    this.setState({ cart: [...oldCart, ...productToAdd] });
    localStorage.setItem("cart", JSON.stringify([...oldCart, ...productToAdd]));
  };

  removeProduct = id => {
    const oldCart = JSON.parse(localStorage.getItem("cart"));
    const newCart = oldCart.filter(i => i.sku !== id);

    this.setState({ cart: newCart });
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  render() {
    const { cart } = this.state;
    const NavMarkup = (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css"
            integrity="sha256-xpOKVlYXzQ3P03j397+jWFZLMBXLES3IiryeClgU5og= sha384-gP4DhqyoT9b1vaikoHi9XQ8If7UNLO73JFOOlQV1RATrA7D0O7TjJZifac6NwPps sha512-AKwIib1E+xDeXe0tCgbc9uSvPwVYl6Awj7xl0FoaPFostZHOuDQ1abnDNCYtxL/HWEnVOMrFyf91TDgLPi9pNg=="
            crossorigin="anonymous"
          />
        </Helmet>
        <Header siteTitle="RTG" len={this.state.cart.length} />
      </>
    );
    const divStyles = {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0
    };

    const children = React.Children.map(this.props.children, (child, index) => {
      // skip undefined and H1 elements
      if (child && child.type !== "h1") {
        return React.cloneElement(child, {
          cart,
          action: this.addProduct,
          remove: this.removeProduct
        });
      }
    });

    return (
      <div className="parentComponent">
        {NavMarkup}
        <div style={divStyles}>
          <main> {children}</main>
          <footer />
        </div>
      </div>
    );
  }
}

export default Layout;
