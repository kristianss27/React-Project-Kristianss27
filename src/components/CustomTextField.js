import React from 'react'
import {
  Button,
  ButtonBase,
  TextField,
  MenuItem,
  IconButton,
  Tooltip
} from '@material-ui/core'
import { withFormik, Formik, Form, FieldArray, Field, getIn } from 'formik'
import * as Yup from 'yup'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { DisplayFormikState } from './FormikHelper'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import * as constants from '../constants/Properties'

//This function will work asyncronously using the field validate on the component Field
const validateWeight = async value => {
  let schema = Yup.string()
    .matches(/^[0-9]*$/, 'Only numbers')
    .max(3, 'Only 3. numbers')
  let valid = await schema.isValid(value)

  return new Promise((resolve, reject) => {
    alert('entro')
    if (valid) {
      resolve('')
    }
    reject('Only 3 numbers')
  })
}

const validateW = async value => {
  let schema = Yup.string()
    .matches(/^[0-9]*$/, 'Only numbers')
    .max(3, 'Only 3. numbers')
  let valid = await schema.isValid(value)

  return valid
}

const MyForm = props => {
  const { id, method, value, placeholder, disabled, classes } = props
  return (
    <Formik
      initialValues={{
        customField: value
      }}
      onSubmit={(fields, actions) => {
        method(id, fields.customField)
      }}
    >
      {({
        errors,
        touched,
        validateField,
        validateForm,
        values,
        handleSubmit,
        handleChange,
        handleBlur
      }) => (
        <Form>
          <Field
            id="customField"
            name="customField"
            //validate={validateWeight}
            render={({ field, form }) => (
              <TextField
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.input
                  }
                }}
                classes={{
                  root: classes.rootTextField
                }}
                margin="normal"
                onChange={async e => {
                  let value = e.target.value
                  if (value !== '') {
                    let validate = await validateW(value)
                    if (validate) {
                      let newValue = value.split().pop()
                      form.setFieldValue('customField', newValue)
                      handleSubmit()
                    } else {
                    }
                  } else {
                    //permit the field be empty
                    form.setFieldValue('customField', '')
                  }
                }}
              />
            )}
          />
        </Form>
      )}
    </Formik>
  )
}

const CustomTextField = connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MyForm)

//(formikEnhancer(MyForm))

export default CustomTextField

/**
<TextField
        id="field"
        placeholder={placeholder}
        disabled={disabled}
        variant="outlined"
        InputProps={{
          classes: {
            input: classes.input
          }
        }}
        classes={{
          root: classes.rootTextField
        }}
        margin="normal"
        value={values.field}
        onChange={handleChange}
        onBlur={handleBlur}
        //event => method(id, event.target.value)
      />
 */
