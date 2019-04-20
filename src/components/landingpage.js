import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class LandingPage extends Component {
    render() {
        return (
            <div stye={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                 <Cell col={12}>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                      <h1>Full Stack Web Developer</h1>
                      <hr/>
                      <p>HTML/CSS | Bootstrap | JavaScript | React | React Native |NodeJS | Sex | Rich | Happy</p>
                    
                    <div className="social-links">
                        {/* LinkedIn*/}
                        <a href="http://google.com" target="_blank">
                            <i className="fa fa-google" rel="noopener noreferrer" aria-hidden="true" />
                        </a>

                        {/* github*/}
                        <a href="http://github.com" target="_blank">
                            <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true" />
                        </a>

                        {/* free code*/}
                        <a href="https://academy.microsoft.com/" target="_blank">
                            <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true" />
                        </a>

                        {/* youtube*/}
                        <a href="http://youtube.com" target="_blank">
                            <i className="fa fa-youtube-square" rel="noopener noreferrer" aria-hidden="true" />
                        </a>
                    </div>

                    </div>
                 </Cell>
              </Grid>
            </div>
        )
    }
}

export default LandingPage;