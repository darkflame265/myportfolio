import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import TestDB from './DB/testdb';
import TestDD from './DB/testdd';

class ShowDB extends Component {

  constructor(props) {
    super (props);
    this.state = { activaTab: 0};
  }

  state = {
    products: [],
    product: {
      name: 'sample product',
      
    }
  }

  toggleCategories(){

    const { products } = this.state;

    if(this.state.activaTab === 0){
        return(
          <div className="App">
            <p>Web</p>
            <pre>{JSON.stringify(products, null,'\t')}</pre>
            
          </div>
        )
    }
    else if(this.state.activaTab === 1) {
      return (
          <div>
            <TestDB />
          </div>
      )
    }
    else if(this.state.activaTab === 2) {
      return (
          <div>
            <TestDD />
          </div>
      )
    }
    else if(this.state.activaTab === 3) {
      return (
          <div>
            <TestDB />
          </div>
      )
    }

  }

  

  componentDidMount() {
    this.getProducts();
  }

  getProducts = _ => {   //products 정보를 state에 입력
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data }))
    .catch(err => console.error(err))
  }
  
  addProduct = _ => {
    const { product } = this.state;
    fetch(`http://localhost:4000/products/add?name=${product.name}&price=${product.price}`)
    .then(this.getProducts)
    .catch(err=> console.error(err))

  }

  renderProductOnlyName = ({ product_id, name, price, products}) => 
  <div key={product_id}>
   {name}
  </div>

  render() {
    const { products, price} = this.state;
    
    return (
      /*
      <div className="App">
      <pre>{JSON.stringify(products, null,'\t')}</pre>
      <TestDB />
      </div>
      */
        <div className="category-tabs">
        <Tabs activeTab={this.state.activaTab} onChange={(tabId) => this.setState({ activaTab: tabId})} ripple>
            <Tab>Web</Tab>
            <Tab>Projects</Tab>
            <Tab>Picture</Tab>
            <Tab>Nobel</Tab>
        </Tabs>

        
            <Grid >
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
       
      </div>
        
        
      );
    
}
}
export default ShowDB;    
