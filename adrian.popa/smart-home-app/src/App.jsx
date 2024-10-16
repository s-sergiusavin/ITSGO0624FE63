import { useState } from "react";
import './App.scss';
import Features from './logic/Features';
import Light from './ui/Light';
import AC from './ui/AC';
import Room from "./ui/Room";

function App() {
  let [lightState, setLightState] = useState(false);
  let [acState, setACState] = useState(false);

  const toggleTheAction = (action) => {
    switch (action) {
      case "Toggle Lights": {
        setLightState((prevState) => {
          return !prevState;
        });
        break;
      }
      case "Toggle AC": {
        setACState((prevState) => {
          return !prevState;
        })
        break;
      }
    }
  }

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightState} />
        <AC acON={acState} />
        <Room status={0.7}/>
      </div>

      <Features toggleAction={toggleTheAction} />
    </div>
  )
}

export default App