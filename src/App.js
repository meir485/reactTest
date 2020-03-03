import React, {useState} from 'react'; //need use State for hooks
import './App.css';
import First from './compoments/First';
import Second from './compoments/Second';
import HomePage from './compoments/HomePage';
import Menu from './compoments/Menu';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  //hooks is like state - just not object
  //instead of set state - do state flag
 // const [flag,setFlag]=useState(false);
  return (
    <div className="App">
      {/* <button onClick={()=>setFlag(!flag)}>change flag</button><br/>
      {flag.toString()} */}

      <h1>my app</h1>{/* //whats out of the Router would not change */}
      <Router>
        {/* //route that stays on all pages. */}
          <Menu />
               <Switch>
                 <Route exact path = '/' component = {()=>{return <HomePage />}}></Route>
                 <Route exact path = '/first' component = {()=>{return <First name="hhhhh"/>}}></Route>
                 <Route exact path = '/second' component = {()=>{return <Second />}}></Route>
               </Switch>
            </Router>
    </div>
  );
}

export default App;
