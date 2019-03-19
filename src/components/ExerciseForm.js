import React from 'react'
import {
  Button,
  TextField,
  MenuItem,
  IconButton,
  Icon,
  Fab,
  Typography
} from '@material-ui/core'
import { withFormik, Formik, Form, FieldArray, Field } from 'formik'
import * as Yup from 'yup'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { DisplayFormikState } from './FormikHelper'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

//Lets define our FormMilk using the HOC withFormik
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    muscles: Yup.string().required('Select a muscle'),
    description: Yup.string().required('Description is required'),
    images: Yup.string()
  }),
  mapPropsToValues: props => ({
    title: '',
    muscles: '',
    description: '',
    images: []
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const { title, muscles, description, images } = values
    const exercise = {
      title,
      muscles,
      description,
      images
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
        rowsMax="10"
        margin="normal"
      />
      {errors.description && touched.description && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>
          {errors.description}
        </div>
      )}

      <FieldArray
        name="images"
        render={arrayHelpers => (
          <div className={classes.root}>
            {values.images && values.images.length > 0 ? (
              values.images.map((friend, index) => (
                <div key={index}>
                  <IconButton
                    disableRipple={true}
                    color="primary"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <Field name={`images.${index}`} component={InputComponent} />
                  <IconButton
                    disableRipple={false}
                    color="primary"
                    onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              ))
            ) : (
              <Button
                variant="outlined"
                size="large"
                fullWidth={true}
                color="primary"
                onClick={() => arrayHelpers.push('')}
              >
                <AddIcon />
                Add Images
              </Button>
            )}
          </div>
        )}
      />

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

const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: ['cristian'] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
        }, 500)
      }
      render={({ values }) => <Form />}
    />
  </div>
)

const InputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, handleChange, handleBlur }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <TextField
      label="*Image url"
      variant="outlined"
      fullWidth={true}
      {...field}
      {...props}
      margin="normal"
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

/**<DisplayFormikState {...props} /> */
