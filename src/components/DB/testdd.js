import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class TestDD extends Component {
    
    state = {
        projectdd: []
        
      }
    
      
    
      componentDidMount() {
        this.getProducts();
      }
    
      getProducts = _ => {   //products 정보를 state에 입력
        fetch('http://localhost:4000/projectdd')
        .then(response => response.json())
        .then(response => this.setState({ projectdd: response.data }))
        .catch(err => console.error(err))   
        
     }
     

      render() {      
        console.log(this.state)
        return (
            <div className="App">
                <p>Project DD</p>
                <pre>{JSON.stringify(this.state.projectdd, null,'\t')}</pre>  
                {this.state.projectdd.map(item => (
                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '300px',
                     background: `${item.background}`

                    }}>
                    
                    </CardTitle>
                    <CardText>
                        <CardTitle>{item.cardtitle}</CardTitle>
                        {item.cardtext}
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://github.com/darkflame265/myportfolio" target="blank">Github</Button>
                        
                        <Button colored href="http://localhost:3000/" target="blank">LiveDemo</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>              
                ))}
                
                
            </div>
          );



}
}

export default TestDD;