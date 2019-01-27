import React from "react"
import Products from  '../components/Products'
import Title from '../components/Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../components/context'
export default class ProductList extends React.Component{
  state={
      product:storeProducts
  }
render()
{
  console.log(this.state.product)
  return(
    <div className="py-5">
    <div className="container">
    <Title name="our" title="products"/>
    <div className="row">
    <ProductConsumer>
      {
        value=>{
          return value.products.map(product =>{
            return <Products key={product.id} product={product}/>
          });
        }}
     </ProductConsumer>
    </div>
    </div>
    </div>
  )
}

}
