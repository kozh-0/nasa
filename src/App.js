import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";
import NotFound from "./Components/NotFound";


export default function App() {
  return (
    <Router basename="/nasa">
      <main>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/nasaphoto" component={NasaPhoto}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </Router>
  );
}

