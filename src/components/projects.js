import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield } from 'react-mdl';
import { Map, List, Record } from 'immutable';


class Projects extends Component {

    /*constructor(props) {                //Tab 관련 속성
        super (props);
        //this.state = Map({ activaTab: 0 });  //Map은 객체를 의미
        
    }
    */

    state = {
       activeTab: 0,
        
       /*projectdd: List([       //List는 배열을 의미
       ]),
       gamedb: List([

       ]),
       */

       projectdb: [],
       gamedb: [],
       picturedb: [],
       noveldb: [],


        
      }

    componentDidMount() {
        this.getProjectdb();
        this.getGameDB();
        this.getpictureDB();
        this.getnovelDB();
        
    }
        
         getProjectdb = _ => {   //products 정보를 state에 입력
          fetch('http://localhost:4000/projectdb')
           .then(response => response.json())
           .then(response => this.setState({ projectdb: response.data }))
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
      
    
    toggleCategories(){
        if(this.state.activeTab === 0){  //states로 연결
            return(
                <div className="projects-grid">
                
                {this.state.projectdb.map(item => (
                <Card key= {item.cardtitle} shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
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
            )
        }
        else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    
                {this.state.gamedb.map(item => (
                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '300px', background:
                    `${item.background}`}}>
                    
                    </CardTitle>
                    <CardText>
                        <CardTitle>{item.cardtitle}</CardTitle>
                        {item.cardtext}
                    </CardText>    
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Download</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>             
                           
                </Card>
                ))}
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                {this.state.picturedb.map(item => (
                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    `${item.background}`}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>{item.cardtitle}</CardTitle>
                        {item.cardtext}
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://www.artstation.com/artwork/meD99" target="blank">url</Button>
                        <Button colored>see</Button>
                        <Button colored>download</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                
                ))}
                </div>
            )
        }
        else if(this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: '#aaa', height: '400px', background:
                    'url(https://w.namu.la/s/06aa781886cf8c30d94662e2710168e2d627a61f6c17453ef63da807d00f7c64db7f566ea6c4b4ad19d2de889b5393f29ec3b6f53d4fb73820eadaed1f2fc3ddbff54190b76c42ab93429457589ad38f9634274b8a4516956094f99b44d0d937) center/ cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>템빨(Templar)</CardTitle>
                        It will started when you turn on the web browser, then show tempeture, time, picture, todolist. It's awesome!!
                    </CardText>    
                    <CardActions border>
                        <Button colored>see</Button>
                        <Button colored>download</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>
                </div>
            )
        }
    }
                
    render() {
        //                   
        console.log(this.state)   
                                //  this.setState({ activeTab: tabId })
        
        return (
            
                <div className="category-tabs">
                
                <Tabs activeTab={ this.state.activeTab } onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>App</Tab>                                                    
                    <Tab>Game</Tab>
                    <Tab>Picture</Tab>
                    <Tab>Nobel</Tab>
                    <Textfield 
                            label="Search Address, city, zip"
                            expandable
                            expandableIcon="search"
                            floatingLabel
                    />
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
               
            </div>
            
        )
    }
}

export default Projects;