import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//function handle the form submission
const BookForm = ({ onSubmit, initialValues }) => {
  const defaultValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  //ddefine the validation schema
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
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
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" component="div" className="errorMessage" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" type="text" />
          <ErrorMessage name="author" component="div" className="errorMessage" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Field name="isbn" type="text" />
          <ErrorMessage name="isbn" component="div" className="errorMessage" />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <Field name="publicationDate" type="date" />
          <ErrorMessage name="publicationDate" component="div" className="errorMessage" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
