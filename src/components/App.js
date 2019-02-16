import React, { Component, Fragment } from "react";
import { Header } from "./Layouts";
import Footer from "../containers/Footer";
import Excercises from "../containers/Excercises";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        
        <Excercises />

        <Footer />
      </Fragment>
    );
  }
}
