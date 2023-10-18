import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import { getBooks } from '../store/actions/booksActions';
import AddBookForm from './AddBookForm';
import { loanBook, getLoanBooks,returnBook } from '../store/actions/booksActions';

import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loanbooks = useSelector((state) => state.books.loanbooks);
  const error = useSelector((state) => state.books.error);

  //loan book funtion
  const handleLoanBook = async (bookId) => {
    try {
      await dispatch(loanBook(bookId)); // Dispatch the loanBook action
      // Dispatch the actions to get both available and loaned books.
      await dispatch(getBooks());
      await dispatch(getLoanBooks());
    } catch (error) {
      // Handle errors, if necessary
      console.error('Error:', error);
    }
  };

  const handleLoanSuccess = (bookTitle) => {
    toast.success(`Book "${bookTitle}" loaned successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  //return book funtion
  const handleReturnBook = async (bookId) => {
    try{
      await dispatch(returnBook(bookId)); // Dispatch the retrunBook action
      await dispatch(getLoanBooks());
      await dispatch(getBooks());
    }catch(error){
      console.error('Error:', error);
    }
  };

  const handleReturnSuccess = (bookTitle) => {
    toast.success(`Book "${bookTitle}" Retrun successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

 

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLoanBooks()); // Fetch loaned books
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h3>Add New Book</h3>
        <AddBookForm />
        <br />
        <h3 className="container mt-3">List Of Available Books</h3>
        {error && <div className="alert alert-danger">{error}</div>}

        <section class="intro mt-3">
          <div class="bg-image h-100" style={{ backgroundColor: '#f5f7fa;' }}>
            <div class="mask d-flex align-items-center h-100">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body p-0">
                        <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '300px' }}>
                          <table class="table table-striped mb-0">
                            <thead style={{ backgroundColor: '#002d72' }}>
                              <tr>
                                <th className="headcolor">Title</th>
                                <th className="headcolor">Author</th>
                                <th className="headcolor">Available</th>
                                <th className="headcolor">Loan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {books.map((book) => (
                                <tr className="table-light" key={book.id}>
                                  <td>{book.title}</td>
                                  <td>{book.author}</td>
                                  <td>{book.available ? 'Yes' : 'No'}</td>
                                  <td>
                                    {book.available ? (
                                      <button
                                        onClick={() => {
                                          handleLoanBook(book.id);
                                          handleLoanSuccess(book.title);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Loan
                                      </button>
                                    ) : (
                                      'Not Available'
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container mt-3">
        <h3>List Of Loaned Books</h3>
        <section class="intro mt-3">
          <div class="bg-image h-100" style={{ backgroundColor: '#f5f7fa;' }}>
            <div class="mask d-flex align-items-center h-100">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body p-0">
                        <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '300px' }}>
                          <table class="table table-striped mb-0">
                            <thead style={{ backgroundColor: '#002d72' }}>
                              <tr>
                                <th className="headcolor">Title</th>
                                <th className="headcolor">Author</th>
                                <th className="headcolor">Available</th>
                                <th className="headcolor">Return</th>
                              </tr>
                            </thead>
                            <tbody>
                              {loanbooks.map((book) => (
                                <tr className="table-light" key={book.id}>
                                  <td>{book.title}</td>
                                  <td>{book.author}</td>
                                  <td>{book.available ? 'Yes' : 'No'}</td>
                                  <td>
                                    {book.available ? (
                                       'Not Available'
                                    ) : (
                                      <button
                                      onClick={() => {
                                        handleReturnBook(book.id);
                                        handleReturnSuccess(book.title);
                                      }}
                                      className="btn btn-primary"
                                    >
                                      Return
                                    </button>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;