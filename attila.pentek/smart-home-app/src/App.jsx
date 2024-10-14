import { useState } from "react";
import "./App.scss";
import Features from "./logic/Features";
import Light from "./ui/Light";
import Room from "./ui/Room";

function App() {
  let [lightState, setLightState] = useState(false);

  const toggleTheAction = (action) => {
    if (action === "Toggle Lights") {
      setLightState((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightState} />
        <Room status={0.5} />
      </div>

      <Features toggleAction={toggleTheAction} />
    </div>
  );
}

export default App;
