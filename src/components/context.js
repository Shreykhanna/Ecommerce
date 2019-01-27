import React from 'react'
import {storeProducts,detailProduct} from '../data'
const ProductContext=React.createContext();
class ProductProvider extends React.Component{
  state={
      products:[],
      detailproducts:detailProduct
  }
  componentDidMount()
  {
    this.setProducts();
  }
  setProducts=()=>{
    let tempProducts=[];
    storeProducts.forEach(item =>{
      const singleItem={...item};
      tempProducts=[...tempProducts,singleItem];
    })
    this.setState(()=>{
      return {products:tempProducts}
    })
  }
  getItem=(id)=>{
   const product=this.state.products.find(item =>item.id===id);
   return product;
  }

  handleDetail=(id)=>{
    const product=this.getItem();
    this.setState(()=>{
      return{detailProduct:product}
    })
    console.log("Inside handle detail function")
  }
  addToCart=(id)=>{
      console.log("added to the cart",id)
  }
  render()
  {
    return(
        <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart
        }}>
            {this.props.children}
        </ProductContext.Provider>

       )
  }
}
const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
