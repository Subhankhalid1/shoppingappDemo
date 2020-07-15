import React from 'react';
import Home from './component/Home';
import Product from './component/Product';
import ProductItems from './component/ProductItems';
import About from './component/About';
import NavBar from './component/NavBar';

import {BrowserRouter as Router,Switch, Route} from "react-router-dom";


function RouteConfig() {
  return (
  <div>
      <Router>
        <NavBar/>
          <Switch>
              <Route  exact path="/" component={Home}/>
              <Route path="/Product" component={Product}/>
              <Route path="/ProductItems/:id" component={ProductItems}/>
              <Route path="/About" component={About}/>
              <Route path="*" component={()=><h2>404 Not Found</h2>}/>
          </Switch>
          
      </Router>
      
    </div>
  );
}

export default RouteConfig;