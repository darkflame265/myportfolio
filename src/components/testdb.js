import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class TestDB extends Component {
    
    state = {
        projectdb: [],
        price: [],
        product: {
          name: 'sample product',
          
        }
      }
    
      
    
      componentDidMount() {
        this.getProducts();
      }
    
      getProducts = _ => {   //products 정보를 state에 입력
        fetch('http://localhost:4000/projectdb')
        .then(response => response.json())
        .then(response => this.setState({ projectdb: response.data }))
        .catch(err => console.error(err))
      }
      

      render() {
        const { projectdb } = this.state;
        
        return (
            <div className="App">
                <pre>{JSON.stringify(projectdb, null,'\t')}</pre>    
                <p>SEX</p>
            </div>
            
          );



}
}

export default TestDB;