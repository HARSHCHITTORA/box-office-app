import React from "react";
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Switch>
     <Route exact path="/">
      this is home page
     </Route>
     <Route exact path="/starred">
      this is home starred
     </Route>

     <Route>
       error 404
     </Route>
    </Switch>
  );
}

export default App;
