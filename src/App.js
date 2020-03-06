import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

const HatsPage = () => {
    return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
} 

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop/hats' component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
