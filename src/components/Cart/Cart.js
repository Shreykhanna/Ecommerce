import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "./../context";
import ProductsList from "./../ProductsList";
import CartList from "./CartList";
import CartTotal from "./CartTotals";
export default class Cart extends React.Component {
  render() {
    const data = {
      id: 3,
      title: "HTC 10 - Black",
      img: "img/product-3.png",
      price: 8,
      company: "htc",
      info:
        "The HTC 10 also includes a fingerprint sensor under the 5.2-inch 1440x2560 Gorilla Glass 3 screen. The internals of the HTC 10 are similar to its contemporary flagships. The HTC 10 includes the quad-core Qualcomm Snapdragon 820 processor and 4 GB RAM and Adreno 530 graphics card.",
      inCart: true,
      count: 1,
      total: 8
    };
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            console.log(cart);
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
