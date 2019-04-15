import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import routes from './routes';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length >0) {
      result = routes.map((route,index)=>{
        return(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          >
          </Route>
        )
      })
    }
    return <Switch>{result}</Switch>;
  }
  render() {
    return (
      <Router>
        <Menu></Menu>
        <div className="container">
          <div className="row">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
