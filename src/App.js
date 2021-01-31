import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./Components/welcome/Welcome";
import Clock from "./Components/clock/Clock";
import Contact from "./Components/contact/Contact";
import Navigation from "./Components/navigation/Navigation";
import Error from "./Components/404 error/Error";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Salman" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/welcome" component={Error} />
        <Route path="/:name" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
