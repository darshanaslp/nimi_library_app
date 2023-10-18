const initialState = {
  books: [],
  loanbooks: [],
  error: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKS_SUCCESS':
      return { ...state, books: action.books, error: null };
    case 'GET_BOOKS_ERROR':
      return { ...state, error: action.error };
    case 'GET_LOAN_BOOKS_SUCCESS':
      return { ...state, loanbooks: action.loanbooks, error: null };
    case 'GET_LOAN_BOOKS_ERROR':
      return { ...state, error: action.error };
    case 'ADD_BOOK_SUCCESS':
      const updatedBooks = [...state.books, action.book];
      return { ...state, books: updatedBooks, error: null };
    case 'ADD_BOOK_ERROR':
      return { ...state, error: action.error };
    case 'SEARCH_BOOKS_SUCCESS':
      return { ...state, books: action.books, error: null };
    case 'SEARCH_BOOKS_ERROR':
      return { ...state, error: action.error };
    case 'LOAN_BOOK_SUCCESS':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.bookId ? { ...book, available: false } : book
        ),
        error: null,
      };
    case 'LOAN_BOOK_ERROR':
      return { ...state, error: action.error };
      case 'RETURN_BOOK_SUCCESS':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.bookId ? { ...book, available: true } : book
        ),
        error: null,
      };
    case 'RETURN_BOOK_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default booksReducer;