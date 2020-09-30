import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import ComingSoon from "./pages/ComingSoon";
import Favourites from "./pages/Favourites";

import "../src/styles/styles.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/comingsoon" component={ComingSoon} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
