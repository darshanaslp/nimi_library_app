const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//cors enable
const cors = require('cors');
app.use(cors());

//passtprt users
const passport = require('./config/auth');
app.use(passport.initialize());

// Add your routes here
const booksRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');

app.use('/books', booksRoutes);
app.use('/auth', authRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});