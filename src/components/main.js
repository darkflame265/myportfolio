import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AbouteMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import ShowDB from './showdb'

const Main = () => {
  return <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AbouteMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/showdb" component={ShowDB} />
  </Switch>
}

export default Main;