import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";

const rootElement = document.getElementById(`root`);

const init = () => {
  const settings = {
    mistakesAmount: 3
  };

  ReactDOM.render(
      <App
        mistakesAmount={settings.mistakesAmount}
      />,
      rootElement
  );
};

init();

