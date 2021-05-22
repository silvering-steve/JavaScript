/* eslint-disable linebreak-style */

const {
  addBooks, getAllBooks, getBooksById, editBookById, deleteBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksById,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];

module.exports = routes;
