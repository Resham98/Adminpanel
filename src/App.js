import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import App1 from './Components/Dashboard';
import App2 from './Components/AddNew';
import AppLogin from './Components/login';
import {withRouter} from "react-router";

function App() {
  return (
    <Router>
      <Route  path ={'/login'} component= {withRouter(AppLogin)}/>
      <Route path={'/Dashboard'} component={withRouter(App1)}/>
      <Route path={'/AddNew'} component={withRouter(App2)}/>


   
    </Router>

  );
}
export default App;