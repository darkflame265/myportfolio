import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content,  } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                  <Navigation>
                  
                      <Link to="/resume">Web</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                      <Link to="/showdb">ShowDB</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                  <Navigation>
                      <a href="resume">Web</a>
                      <a href="aboutme">AboutMe</a>
                      <a href="projects">Projects</a>
                      <a href="contact">Contact</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
