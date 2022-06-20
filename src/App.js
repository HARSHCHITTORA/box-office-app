import React from "react";
import { Router } from "react-router-dom";
import {Switch,Route} from 'react-router-dom';
// import Navs from "./components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";
function App() {
  return (
    <div>
      {/* <Navs/> */}
    <Switch>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route exact path="/starred">
     <Starred/>
     </Route>
     
      <Route exact path="/show/:id" >
      <Show />
      </Route>


     <Route>
       error 404
     </Route>
    </Switch>
    </div>
  );
}

export default App;
