import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/actions/booksActions';
import { getBooks } from '../store/actions/booksActions';
import { toast } from 'react-toastify';

const AddBookForm = () => {
  const dispatch = useDispatch();

  //form submit funtion
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(addBook(values));
      toast.success('Book added successfully');
      dispatch(getBooks());
      resetForm(); // Clear the form
    } catch (error) {
      toast.error('Failed to add book');
    }
  };

  return (
    <Formik
      initialValues={{ title: '', author: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Title is required';
        }
        if (!values.author) {
          errors.author = 'Author is required';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='row'>
          <div className='col-md-3'>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
          </div>
          <div className='col-md-3'>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <Field type="text" name="author" className="form-control" />
              <ErrorMessage name="author" component="div" className="text-danger" />
            </div>
          </div>
          <div className='col-md-3'>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mt-3">
                Add Book
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddBookForm;