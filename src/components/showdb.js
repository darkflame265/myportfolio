import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import TestDB from './DB/testdb';
import TestDD from './DB/testdd';

class ShowDB extends Component {

  constructor(props) {
    super (props);
    
  }

  state = {
    activaTab: 0,
     
    /*projectdd: List([       //List는 배열을 의미
    ]),
    gamedb: List([

    ]),
    */

    projectdd: [],
    gamedb: [],
    picturedb: [],
    noveldb: [],


     
   }

  toggleCategories(){

    if(this.state.activaTab === 0){
        return(
          <div className="App">
            <p>Web</p>
            <pre>{JSON.stringify(this.state.projectdd, null,'\t')}</pre>
            
          </div>
        )
    }
    else if(this.state.activaTab === 1) {
      return (
          <div>
            <p>Projects</p>
            <pre>{JSON.stringify(this.state.projectdd, null,'\t')}</pre>
          </div>
      )
    }
    else if(this.state.activaTab === 2) {
      return (
          <div>
            <p>Pictures</p>
            <pre>{JSON.stringify(this.state.picturedb, null,'\t')}</pre>
          </div>
      )
    }
    else if(this.state.activaTab === 3) {
      return (
          <div>
            <p>novels</p>
            <pre>{JSON.stringify(this.state.noveldb, null,'\t')}</pre>>
          </div>
      )
    }

  }

  

  

  getProducts = _ => {   //products 정보를 state에 입력
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data }))
    .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getProjectdd();
    this.getGameDB();
    this.getpictureDB();
    this.getnovelDB();
    
}
    
     getProjectdd = _ => {   //products 정보를 state에 입력
      fetch('http://localhost:4000/projectdd')
       .then(response => response.json())
       .then(response => this.setState({ projectdd: response.data }))
       .catch(err => console.error(err))   
        
    }
     getGameDB = _ => {
        fetch('http://localhost:4000/gamedb')
        .then(response => response.json())
        .then(response => this.setState({ gamedb: response.data }))
        .catch(err => console.error(err))  
     }
     getpictureDB = _ => {
        fetch('http://localhost:4000/picturedb')
        .then(response => response.json())
        .then(response => this.setState({ picturedb: response.data }))
        .catch(err => console.error(err))  
     }
     getnovelDB = _ => {
        fetch('http://localhost:4000/noveldb')
        .then(response => response.json())
        .then(response => this.setState({ noveldb: response.data }))
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
