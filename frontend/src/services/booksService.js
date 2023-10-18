import axios from 'axios';

const API_URL = 'http://localhost:5000';

//get book list
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get book that loand
export const getLoanBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books/loan-list`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//add book to list
export const postBook = async (book) => {
  try {
    const response = await axios.post(`${API_URL}/books/add`, book);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//search book by title
export const searchBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/books/search?title=${title}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//search book by author
export const searchBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${API_URL}/books/search?author=${author}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//make book loan
export const loanBooks = async (bookId) => {
  const response = await axios.post(`${API_URL}/books/loan`, { bookId });
  return response.data;
};

//make  book return
export const returnBooks = async (bookId) => {
  const response = await axios.post(`${API_URL}/books/return`, { bookId });
  return response.data;
};