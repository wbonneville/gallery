import React from "react";
import Gallery from "./Gallery";
import About from "./About";
import Info from "./Info";

// import data

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Gallery}></Route>
        <Route path="/about" component={Info}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
