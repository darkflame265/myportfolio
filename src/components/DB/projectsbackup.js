
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {

    constructor(props) {
        super (props);
        this.state = { activaTab: 0};
    }

    states = {
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
      
    
    toggleCategories(){
        if(this.state.activaTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}



                    
                    <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '300px', background:
                    'url(https://i.ytimg.com/vi/n8iA18R76jk/maxresdefault.jpg) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                        <CardTitle>MyPortfolio</CardTitle>
                        my first portfolio used react to make it.
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://github.com/darkflame265/myportfolio" target="blank">Github</Button>
                        
                        <Button colored href="http://localhost:3000/" target="blank">LiveDemo</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '300px', background:
                    'url(http://lh3.googleusercontent.com/gImYUj1PWEykH-bIXZVDJWDOvZv1j4oYCwk8A9nnGzxOum46-SWlZ1Z7MlMGvkbRL0s=w300) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                        <CardTitle>ToDo App</CardTitle>
                        It will started when you turn on the web browser, then show tempeture, time, picture, todolist. It's awesome!!
                        I used react to make it.
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://github.com/darkflame265/momontom" target="blank">Github</Button>
                
                        <Button colored href="https://serranoarevalo.github.io/momonton/" target="blank">LiveDemo</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '300px', background:
                    'url(https://raw.githubusercontent.com/candypoplatte/movie-app-clone/master/output/output.png) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                        <CardTitle>Movie App</CardTitle>
                        You can see the movie list sort by rating in recent.
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://github.com/darkflame265/moviepr" target="blank">Github</Button>
                
                        <Button colored href="https://serranoarevalo.github.io/momonton/" target="blank">YET LiveDemo</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>
                </div>
            )
        }
        else if(this.state.activaTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '300px', background:
                    'url(https://static.androidgame365.com/uploads/posts/2013-03/1364357159_avoid6.jpg) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                        <CardTitle>Avoid Game</CardTitle>
                        It will started when you turn on the web browser, then show tempeture, time, picture, todolist. It's awesome!!
                    </CardText>    
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Download</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>             
                           
                </Card>
                </div>
            )
        }
        else if(this.state.activaTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    'url(https://66.media.tumblr.com/2fd16231469b2e1e6cc21b8f46da2dc7/tumblr_p9qoogOAcs1qhttpto4_500.jpg) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>Oceans & Empires</CardTitle>
                        KyuYong Eom - Seoul, Korea (South)
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

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    'url(https://cdnb.artstation.com/p/assets/images/images/005/577/713/large/kyu-yong-eom-ocean-war-art.jpg?1492121358) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>Kingdom of the Kraken</CardTitle>
                        KyuYong Eom - Seoul, Korea (South)
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://www.artstation.com/artwork/nbexo" target="blank">url</Button>
                        <Button colored>see</Button>
                        <Button colored>download</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    'url(https://cdna.artstation.com/p/assets/images/images/015/605/814/large/kyuyong-eom-ozsmr-asfinal.jpg?1548945560) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>Trust me</CardTitle>
                        KyuYong Eom - Seoul, Korea (South)
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://www.artstation.com/artwork/nQ45KX" target="blank">url</Button>
                        <Button colored>see</Button>
                        <Button colored>download</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    'url(https://cdnb.artstation.com/p/assets/images/images/012/217/433/large/kyuyong-eom-kerberos-and-i-g3.jpg?1533769757) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>Kerberos and I</CardTitle>
                        KyuYong Eom - Seoul, Korea (South)
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://www.artstation.com/artwork/qq0eN" target="blank">url</Button>
                        <Button colored>see</Button>
                        <Button colored>download</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    'url(https://cdna.artstation.com/p/assets/images/images/005/526/206/large/kyu-yong-eom-ire-blood-memory-main-art.jpg?1491693356) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>IRE blood memory</CardTitle>
                        KyuYong Eom - Seoul, Korea (South)
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://www.artstation.com/artwork/GD9rB" target="blank">url</Button>
                        <Button colored>see</Button>
                        <Button colored>download</Button>
                    </CardActions>             
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>

                <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '400px', background:
                    'url(https://cdnb.artstation.com/p/assets/images/images/011/902/745/large/kyuyong-eom-pokergirl.jpg?1532009755) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <CardTitle>you and I</CardTitle>
                        KyuYong Eom - Seoul, Korea (South)
                    </CardText>    
                    <CardActions border>
                        <Button colored href="https://www.artstation.com/artwork/1mLa2" target="blank">url</Button>
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
        else if(this.state.activaTab === 3) {
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
        return (
            
                <div className="category-tabs">
                <Tabs activeTab={this.state.activaTab} onChange={(tabId) => this.setState({ activaTab: tabId})} ripple>
                    <Tab>App</Tab>
                    <Tab>Game</Tab>
                    <Tab>Picture</Tab>
                    <Tab>Nobel</Tab>
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
