// controllers/bookController.js
const { Op } = require('sequelize');
const Book = require('../models/book');

//add new book to avalable list
const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    
    // Input validation
    if (!title || !author) {
      return res.status(400).json({ error: 'Title and author are required' });
    }
    
    const newBook = await Book.create({ title, author, available: true });
    res.json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add the book' });
  }
};

//list avalable books
const listBooks = async (req, res) => {
  try {
    const availableBooks = await Book.findAll({ where: { available: true } });
    res.json(availableBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to list available books' });
  }
};

//list loan books
const listLoanBooks = async (req, res) => {
  try {
    const loanBooks = await Book.findAll({ where: { available: false } });
    res.json(loanBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to list available books' });
  }
};

//search book by title or author
const searchBooks = async (req, res) => {
  try {
    const { title, author } = req.query;
    
    // Input validation
    if (!title && !author) {
      return res.status(400).json({ error: 'Title or author query parameter is required' });
    }
    
    const searchResult = await Book.findAll({
      where: {
        title: { [Op.like]: `%${title || ''}%` },
        author: { [Op.like]: `%${author || ''}%` },
      },
    });
    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search for books' });
  }
};

//book get loan
const loanBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    if (!book.available) {
      return res.status(400).json({ error: 'Book is already loaned' });
    }

    book.available = false;
    await book.save();
    res.json({ message: 'Book loaned successfully', book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to loan the book' });
  }
};

//book get return
const returnBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    if (book.available) {
      return res.status(400).json({ error: 'Book is already available' });
    }

    book.available = true;
    await book.save();
    res.json({ message: 'Book returned successfully', book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to return the book' });
  }
};

module.exports = {
  addBook,
  listBooks,
  listLoanBooks,
  searchBooks,
  loanBook,
  returnBook,
};