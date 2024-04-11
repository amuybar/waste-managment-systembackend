// routes/userRoutes.js

const userController = require('../controllers/userController');

function userRoutes(fastify, options, done) {
  // Route to create a new user
  fastify.post('/users', userController.createUser);

  // Route to get all users
  fastify.get('/users', userController.getAllUsers);

  // Route to get a single user by ID
  fastify.get('/users/:id', userController.getUserById);

  // Route to update a user by ID
  fastify.put('/users/:id', userController.updateUserById);

  // Route to delete a user by ID
  fastify.delete('/users/:id', userController.deleteUserById);

  done();
}

module.exports = userRoutes;
