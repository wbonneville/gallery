import React from "react";
import Gallery from "./Gallery";
import { initialData, initialDataSetTwo, initialDataSetThree } from "./data";

function App() {
  return (
    <div className="App">
      <Gallery
        initialData={initialData}
        initialDataSetTwo={initialDataSetTwo}
        initialDataSetThree={initialDataSetThree}
      />
    </div>
  );
}

export default App;
