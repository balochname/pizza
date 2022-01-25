import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Manu from "./component/pages/manu";
import Main from "./component/pages/home";
import Order from "./component/pages/order";
import Select from "./component/pages/select";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/Home" component={Main_Home} exact/> */}
        <Route path='/' component={Main} exact />
        <Route path='/manu' component={Manu} exact />
        <Route path='/order' component={Order} exact />
        <Route path='/select' component={Select} exact />
      </Switch>
    </Router>
  );
}

export default App;
