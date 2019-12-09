import React from "react";
import Gallery from "./Gallery";
import { initialData } from "./data";
function App() {
  return (
    <div className="App">
      <Gallery initialData={initialData} />
    </div>
  );
}

export default App;
