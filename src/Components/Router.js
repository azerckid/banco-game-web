import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Navigator from "./Navigator";
import Home from "../Routes/Home";
import Company from "../Routes/Company";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <>
      <Router>
        <Navigator></Navigator>
        <Route exact path="/" component={Home}></Route>
        <Route path="/company" component={Company}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Router>
    </>
  );
};
