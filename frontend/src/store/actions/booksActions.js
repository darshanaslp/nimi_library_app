import {
    getBooks as getBooksService,
    getLoanBooks as getLoanBooksService,
    searchBooksByTitle as searchBooksByTitleService,
    searchBooksByAuthor as searchBooksByAuthorService,
    postBook,
    loanBooks,
    returnBooks
  }
  from '../../services/booksService';


export const getBooks = () => async (dispatch) => {
  try {
    const books = await getBooksService();
    dispatch({ type: 'GET_BOOKS_SUCCESS', books });
  } catch (error) {
    dispatch({ type: 'GET_BOOKS_ERROR', error });
  }
};

export const getLoanBooks = () => async (dispatch) => {
  try {
    const loanbooks = await getLoanBooksService();
    dispatch({ type: 'GET_LOAN_BOOKS_SUCCESS', loanbooks });
  } catch (error) {
    dispatch({ type: 'GET_LOAN_BOOKS_ERROR', error });
  }
};


export const addBook = (book) => async (dispatch) => {
  try {
    const addedBook = await postBook(book);
    dispatch({ type: 'ADD_BOOK_SUCCESS', book: addedBook });
  } catch (error) {
    throw error;
  }
};


export const searchBooksByTitle = (title) => async (dispatch) => {
  try {
    const books = await searchBooksByTitleService(title);
    dispatch({ type: 'SEARCH_BOOKS_SUCCESS', books });
    return books;
  } catch (error) {
    throw error;
  }
};

export const searchBooksByAuthor = (author) => async (dispatch) => {
  try {
    const books = await searchBooksByAuthorService(author);
    dispatch({ type: 'SEARCH_BOOKS_SUCCESS', books });
    return books;
  } catch (error) {
    throw error;
  }
};

export const loanBook = (bookId) => async (dispatch) => {
  try {
    const response = await loanBooks(bookId);
    dispatch({ type: 'LOAN_BOOK_SUCCESS', book: response.book });
  } catch (error) {
    // Handle error here, show a toast, or dispatch an error action
  }
};


export const returnBook = (bookId) => async (dispatch) => {
  try {
    const response = await returnBooks(bookId);
    dispatch({ type: 'LOAN_BOOK_SUCCESS', book: response.book });
  } catch (error) {
    // Handle error here, show a toast, or dispatch an error action
  }
};