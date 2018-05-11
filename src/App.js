import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
/*import logo from './logo.svg';*/
import './App.css';
import {Route} from 'react-router-dom';

const LIST =[{
    text: 'welcome',
    url: '/welcome'
}, {
    text: 'goods',
    url: '/goods'
}];

/*const GOODS = [{
    name: 'iPhone 7',
    price: '6999',
    amount: 37
}, {
    name: 'iPad',
    price: '3488',
    amount: 82
}, {
    name: 'Macboos Pro',
    price: '11888',
    amount: 15
}];*/

class App extends Component{
    render() {
        return (
            <div className="App">
                <div className="nav_bar">
                    <Nav list={LIST}/>
                </div>
                <div className="conent">
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/goods' component={Goods}/>
                </div>
            </div>
        );
    }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

export default App;
