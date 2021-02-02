import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import Contact from "./component/content/Contact";
import routes from "./routes";
import { renderRoutes } from "react-router-config";

const App = () => {
  return (
    <>
      {renderRoutes(routes)}
      <Contact />
    </>
  );
};

export default App;
