import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "./Excercises";
import { muscles, excercises } from "../store";

export default class extends Component {
  state = {
    excercises,
    excercise: {}
  };

  getExcercisesByMuscle() {
    const initMuscles = muscles.reduce(
      (excercises, category) => ({
        ...excercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;
        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise];
        return excercises;
      }, initMuscles)
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExcerciseSelect = id => {
    this.setState(({ excercises }) => ({
      excercise: excercises.find(ex => ex.id === id)
    }));
  };

  handleExcerciseCreate = excercise => {
    this.setState(({ excercises }) => ({
      excercises: [...excercises, excercise]
    }));
  };

  handleDelete = id => {
    this.setState(({ excercises }) => ({
      excercises: excercises.filter(excercise => excercise.id !== id),
      excercise: {}
    }));
  };

  render() {
    const excercisesByMuscle = this.getExcercisesByMuscle(),
      { category, excercise } = this.state;
    console.log(excercisesByMuscle);
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExcerciseCreate={this.handleExcerciseCreate}
        />

        <Excercises
          excercises={excercisesByMuscle}
          category={category}
          onSelect={this.handleExcerciseSelect}
          excercise={excercise}
          onDelete={this.handleDelete}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
