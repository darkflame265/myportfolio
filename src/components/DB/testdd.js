import React, { Component } from 'react';

class TestDD extends Component {
    
    state = {
    
        
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
        const { state } = this.state;
       
        console.log(this.state.projectdd)
        
        return (
            <div className="App">
                <p>Project DD</p>
                 
                <pre>{JSON.stringify(this.state.projectdd, null,'\t')}</pre>  
                
                
            </div>
          );



}
}

export default TestDD;