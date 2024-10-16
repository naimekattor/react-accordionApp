import React from "react";
import AccordianData from "./component/AccordianData";
import Accordian from "./component/Accordian";
import "./App.css";
const App = () => {
  return (
    <div className="accordian">
      <div>
        {AccordianData.map((data) => (
          <Accordian data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
