import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//function to handla the form submission
const AuthorForm = ({ onSubmit, initialValues }) => {
  const defaultValues = {
    name: '',
    birthDate: '',
    biography: '',
  };
// define the validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    //initilize the formik
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="errorMessage" />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" component="div" className="errorMessage" />
        </div>
        <div>
          <label htmlFor="biography">Biography</label>
          <Field name="biography" as="textarea" />
          <ErrorMessage name="biography" component="div" className="errorMessage" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
