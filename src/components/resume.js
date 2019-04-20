import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Resume extends Component {
    constructor(props) {
        super (props);
        this.state = { activaTab: 0};
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

                {/* Project 2 */}
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

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:
                    'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's
                    </CardText>    
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>             
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>       
                </Card>
                </div>
            )
        } else if(this.state.activaTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '300px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '300px', background:
                        'url(http://lh3.googleusercontent.com/gImYUj1PWEykH-bIXZVDJWDOvZv1j4oYCwk8A9nnGzxOum46-SWlZ1Z7MlMGvkbRL0s=w300) center / cover'}}>
                        
                        </CardTitle>
                        <CardText>
                            <CardTitle>DJango Blog</CardTitle>
                            my first blog made by python django.
                        </CardText>    
                        <CardActions border>
                            <Button colored href="https://github.com/darkflame265/my-first-blog" target="blank">Github</Button>
                    
                            <Button colored href="https://serranoarevalo.github.io/momonton/" target="blank">NOT READY</Button>
                        </CardActions>             
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>       
                    </Card>
                </div>
            )
        } else if(this.state.activaTab === 2) {
            return (
                <div className="projects-grid">
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


                </div>
            )
        } else if(this.state.activaTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        } 
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activaTab} onChange={(tabId) => this.setState({ activaTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python(DJ)</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>UNITY</Tab>
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
export default Resume;