import React from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/wecome-screen.jsx";

export const App = (props) => {
  const {mistakesAmount} = props;

  return (
    <WelcomeScreen
      mistakesAmount={mistakesAmount}
    />
  );
};

App.propTypes = {
  mistakesAmount: PropTypes.number.isRequired
};
