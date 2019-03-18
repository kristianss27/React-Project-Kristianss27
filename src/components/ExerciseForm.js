import React from 'react'
import { Button, TextField, MenuItem } from '@material-ui/core'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'

//Lets define our FormMilk using the HOC withFormik
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    muscles: Yup.string().required('Select a muscle'),
    description: Yup.string().required('Description is required')
  }),
  mapPropsToValues: props => ({
    title: '',
    muscles: '',
    description: '',
    action: null
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const { title, muscles, description } = values
    const exercise = {
      title,
      muscles,
      description
    }
    setTimeout(() => {
      //alert(JSON.stringify(payload, null, 2));
      props.addExcercise({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
      })
      props.openForm(false)
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'MyForm'
})

const MyForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
    classes,
    categories,
    buttonText
  } = props
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="title"
        label="*Title"
        variant="outlined"
        fullWidth={true}
        value={values.title}
        className={classes.formControl}
        onChange={handleChange}
        onBlur={handleBlur}
        margin="normal"
      />

      {errors.title && touched.title && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.title}</div>
      )}

      <TextField
        id="muscles"
        select
        fullWidth={true}
        label="*Muscle"
        className={classes.formControl}
        value={values.muscles}
        onChange={handleChange('muscles')}
        onBlur={handleBlur('muscles')}
        margin="normal"
        variant="outlined"
      >
        {categories.map(category => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>

      {errors.muscles && touched.muscles && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.muscles}</div>
      )}

      <TextField
        id="description"
        value={values.description}
        label="*Description"
        variant="outlined"
        fullWidth={true}
        multiline
        rows="6"
        onChange={handleChange}
        onBlur={handleBlur}
        className={classes.formControl}
        rowsMax="10"
        margin="normal"
      />
      {errors.description && touched.description && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>
          {errors.description}
        </div>
      )}

      <div className={classes.buttons}>
        <Button
          disabled={!dirty || isSubmitting}
          onClick={handleReset}
          color="primary"
          variant="contained"
          className={classes.formControl}
        >
          Reset
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
          color="primary"
          variant="contained"
          className={classes.formControl}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  )
}

const ExerciseForm = connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(formikEnhancer(MyForm))

export default ExerciseForm
