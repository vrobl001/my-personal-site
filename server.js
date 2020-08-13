// Require Modules
const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3000;

// Set up express app
const app = express();

// Configure express app app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Mount Routes app.use()
app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/projects', require('./routes/projects'));

// Tell app to listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
