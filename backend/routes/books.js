const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

// Define routes for adding, listing, searching, and managing books

router.post('/add', bookController.addBook);
router.get('/list', bookController.listBooks);
router.get('/loan-list', bookController.listLoanBooks);
router.get('/search', bookController.searchBooks);
router.post('/loan', bookController.loanBook);
router.post('/return', bookController.returnBook);

module.exports = router;