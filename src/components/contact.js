import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
              <Grid className="contact-grid">
                <Cell col={6}>
                  <h2>DarkFlame265</h2>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height: '250px'}}
                  />
                  <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                  I Wanna Be a God!!! Every Body cheer up me pls!
                  </p>
                </Cell>
                <Cell col={6}>
                  <h2>Contact Me</h2>
                  <hr/>

                  <div className="contact-list">
                  <List>
                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            010-8979-2736
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-fax" aria-hidden="true"/>
                            (123) 456-7890
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            ter2490@naver.com
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            TopSecret!!!
                        </ListItemContent>
                    </ListItem>
                   
                    </List>
                  </div> 
                </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contact;