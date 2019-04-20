import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience'
import Skills from './skills'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                          <img
                          src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                          alt="avatar"
                          style={{height: '200px'}}/>
                        </div>

                        <h2 style={{paddingTop: '2em'}}>DarkFlame265</h2>
                        <h4 style={{color: 'gray'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>20 years old, At university, Studying hard to be great Programmer
                            want to learn every IT Technology 
                        </p>
                    
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>Korea cheon-an</p>
                        <h5>Phone</h5>
                        <p>010-8979-2736</p>
                        <h5>Email</h5>
                        <p>ter2490@naver.com</p>
                        <h5>Web</h5>
                        <p>mywebsite is not ready yet</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2019}
                            endYear={2022}
                            schoolName="My University"
                            schoolDescription="Chun-Yang Do-Rip Univercity"
                        />
                        <Education 
                            startYear={2023}
                            endYear={2099}
                            schoolName="Back-Su"
                            schoolDescription="Fucking Awesome Life."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                          startYear={2025}
                          endYear={2098}
                          jobName="SON.cop CEO"
                          jobDescription="I Made Awesome Company!!"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                          skill="javascript"
                          progress={100}
                        />
                        <Skills 
                          skill="HTML/CSS"
                          progress={80}
                        />
                        <Skills 
                          skill="Node.JS"
                          progress={20}
                        />
                        <Skills 
                          skill="React"
                          progress={90}
                        />
                        <Skills 
                          skill="Python"
                          progress={50}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default AboutMe;