import React from "react";
import {WelcomeScreen} from "../welcome-screen/wecome-screen.jsx";

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mistakesAmount} = props;

  return (
    <WelcomeScreen
      mistakesAmount={mistakesAmount}
    />
  );
};
