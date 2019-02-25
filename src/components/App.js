import React, { Component, Fragment } from "react";
import { Header } from "./Layouts";
import Footer from "../containers/Footer";
import Excercises from "../containers/Excercises";
import { connect } from 'react-redux'
import { musclesByDefault } from '../actions'

class App extends Component {

  componentDidMount(){
    //console.log('MUSCLES BY DEFAULT: '+this.props.preLoadMuscles)
    //this.props.dispatch(musclesByDefault(this.props.preLoadMuscles))
  }

  componentDidUpdate(prevProps) {
    /*console.log('MUSCLES BY DEFAULT2: ' + this.props.preLoadMuscles)
    if (prevProps.muscles !== this.props.muscles) {
      this.props.dispatch(
        musclesByDefault(this.props.preLoadMuscles)
      );
    }*/
  }

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

export default connect(
  state => ({
    preLoadMuscles: state.muscles
  })
)(App)
