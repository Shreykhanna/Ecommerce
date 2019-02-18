import React from "react"
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import {ProductConsumer} from"./../context"
import ProductsList from "./../ProductsList"
import CartList from "./CartList"
import CartTotal from "./CartTotals"
export default class Cart extends React.Component{
render()
{
  return(
      <section>
      <ProductConsumer>
      {value => {
          const {cart}=value;
          if(cart.length>0){
            return(
            <React.Fragment>
              <Title name="Your" title="Cart" />
              <CartColumns/>
              <CartList value={value}/>
              <CartTotal value={value}/>
            </React.Fragment>
          );
          }
            else{
                return(
              <EmptyCart/>
            )
          }
      }}
      </ProductConsumer>
      </section>




  )
}

}
