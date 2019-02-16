import { connect } from "react-redux";
import ExcerciseList from "../components/ExcerciseList";
import { deleteExcercise, setExcercise, openForm } from "../actions";
import { muscles } from "../store";

const excercisesByMuscle = state => {
  const initMuscles = muscles.reduce(
    (excercises, category) => ({
      ...excercises,
      [category]: []
    }),
    {}
  );

  return Object.entries(
    state.excercises.reduce((excercises, excercise) => {
      const { muscles } = excercise;
      excercises[muscles] = excercises[muscles]
        ? [...excercises[muscles], excercise]
        : [excercise];
      return excercises;
    }, initMuscles)
  );
};

const mapStateToProps = state => ({
  excercises: excercisesByMuscle(state),
  category: state.category,
  excercise: state.excercise,
  openForm: state.openForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelect: excercise => {
    dispatch(setExcercise(excercise));
  },
  onDelete: id => {
    dispatch(deleteExcercise(id))
  },
  onEdit: (open,excercise) => {
    dispatch(openForm(open))
    dispatch(setExcercise(excercise));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExcerciseList);
