import React from "react";
import Gallery from "./Gallery";
import About from "./About";

// import data

import { BrowserRouter as Router, Route } from "react-router-dom";

{
  /* <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router> */
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Gallery}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
