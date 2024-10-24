
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";

import FeaturesForm from "./logic/FeaturesForm";
import { useState } from "react";
import { Welcome } from "./logic/Welcome";
import SmartHome from "./logic/SmartHome";
import NotFound from "./logic/NotFound";
import HomeIcon from "@mui/icons-material/Home";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";


function App() {
  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: Math.random(),
  });
  
  const updateFeatures = (newFeature) => {
    setFeature(newFeature);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon />
              <Link to={"/welcome"}>Welcome page</Link>
            </li>
            <li>
              <DevicesOtherIcon />
              <NavLink to={"/smart-home"}>Use smart home app</NavLink>
            </li>
            <li>
              <AddToQueueIcon />
              <NavLink to={"/features-form"}>
                Create new smart home features
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<SmartHome newFeature={feature}/>} />
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/smart-home" element={<SmartHome newFeature={feature}/>} />
        <Route path="/features-form" element={<FeaturesForm updateFeatureHandler={updateFeatures}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className="lights yellow ac blue"></div>
    </>
  );
}

export default App;
