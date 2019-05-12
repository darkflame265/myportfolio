import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl';

import RemoveDB from './removeDB';
import AddDB from './addDB';

class ShowDB extends Component {

  state = {
    activaTab: 0,
    projectdb: [],
    gamedb: [],
    picturedb: [],
    noveldb: [],
   }

  toggleCategories(){

    if(this.state.activaTab === 0){
        return(
          <div className="App">
            <p>Web</p>
            <pre>{JSON.stringify(this.state.projectdb, null,'\t')}</pre>
            
          </div>
        )
    }
    else if(this.state.activaTab === 1) {
      return (
          <div>
            <p>Projects</p>
            <pre>{JSON.stringify(this.state.gamedb, null,'\t')}</pre>
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
            <pre>{JSON.stringify(this.state.noveldb, null,'\t')}</pre>
          </div>
      )
    }
    else if(this.state.activaTab === 4) {
      return (
          <div>
            <p>AddDB</p>
            <AddDB />
          </div>
      )
    }
    else if(this.state.activaTab === 5) {
      return (
          <div>
            <p>RemoveDB</p>
            <RemoveDB />
          </div>
      )
    }

  }

  
  componentDidMount() {
    this.getprojectdb();
    this.getgameDB();
    this.getpictureDB();
    this.getnovelDB();
    
}
    
     getprojectdb = _ => {   //products 정보를 state에 입력
      fetch('http://localhost:4000/projectdb')
       .then(response => response.json())
       .then(response => this.setState({ projectdb: response.data }))
       .catch(err => console.error(err))   
        
    }
     getgameDB = _ => {
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
    
    
    return (
        <div className="category-tabs">
        <Tabs activeTab={this.state.activaTab} onChange={(tabId) => this.setState({ activaTab: tabId})} ripple>
            <Tab>Web</Tab>
            <Tab>Projects</Tab>
            <Tab>Picture</Tab>
            <Tab>Nobel</Tab>
            <Tab>AddDB</Tab>
            <Tab>RemoveDB</Tab>
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
