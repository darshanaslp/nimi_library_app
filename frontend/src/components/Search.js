
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { searchBooksByTitle, searchBooksByAuthor } from '../store/actions/booksActions';
import { toast } from 'react-toastify';

import Header from './Header';
import Footer from './Footer';

const SearchPage = () => {
    const dispatch = useDispatch();
    const [titleResults, setTitleResults] = useState([]);
    const [authorResults, setAuthorResults] = useState([]);

    const handleTitleSearch = async (values) => {
        try {
            const title = values.title;
            const books = await dispatch(searchBooksByTitle(title));
            setTitleResults(books);
            if (books.length === 0) {
                toast.info('No records available');
            }
        } catch (error) {
            toast.error('Failed to search books by title');
        }
    };

    const handleAuthorSearch = async (values) => {
        try {
            const author = values.author;
            const books = await dispatch(searchBooksByAuthor(author));
            setAuthorResults(books);
            if (books.length === 0) {
                toast.info('No records available');
            }
        } catch (error) {
            toast.error('Failed to search books by author');
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Search Results</h2>
                <div className='row' >
                    <div className="card col-md-5 border-info  mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Search by Title</h5>
                            <Formik
                                initialValues={{ title: '' }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.title) {
                                        errors.title = 'Title is required';
                                    }
                                    return errors;
                                }}
                                onSubmit={handleTitleSearch}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <Field type="text" name="title" className="form-control" />
                                        <ErrorMessage name="title" component="div" className="text-danger" />
                                    </div>
                                    <button type="submit" className="btn btn-info mt-3">
                                        Search
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                    <div className="card col-md-4 border-success mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Search Results by Title</h5>
                            <ul>
                                {titleResults.map((book) => (
                                    <p key={book.id}>
                                        <b>Book Title:</b>{book.title} 
                                        <br/>
                                        <b>Book Author:</b> {book.author}
                                        <br/>
                                        <b>Book Avalibility:</b> {book.available ? 'Yes' : 'No'}
                                    </p>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="card col-md-5 border-info  mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Search by Author</h5>
                            <Formik
                                initialValues={{ author: '' }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.author) {
                                        errors.author = 'Author is required';
                                    }
                                    return errors;
                                }}
                                onSubmit={handleAuthorSearch}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="author">Author</label>
                                        <Field type="text" name="author" className="form-control" />
                                        <ErrorMessage name="author" component="div" className="text-danger" />
                                    </div>
                                    <button type="submit" className="btn btn-info mt-3">
                                        Search
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="card col-md-4 border-success mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Search Results by Author</h5>
                            <ul>
                                {authorResults.map((book) => (
                                    <p key={book.id}>
                                         <b>Book Title :</b> {book.title} 
                                        <br/>
                                        <b>Book Author :</b> {book.author}
                                        <br/>
                                        <b>Book Avalibility:</b> {book.available ? 'Yes' : 'No'}
                                    </p>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;