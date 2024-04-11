// controllers/userController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(request, reply) {
  try {
    const newUser = await prisma.user.create({
      data: request.body,
    });
    reply.code(201).send(newUser);
  } catch (error) {
    
      console.error(error.message);  // Log the specific error message
      reply.code(500).send({ message: 'Error creating user: ' + error.message });
    
  }
}

async function getAllUsers(request, reply) {
  try {
    const users = await prisma.user.findMany();
    reply.send(users);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving users' });
  }
}

async function getUserById(request, reply) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(request.params.id) },
    });
    if (!user) {
      reply.code(404).send({ message: 'User not found' });
    } else {
      reply.send(user);
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving user' });
  }
}

async function updateUserById(request, reply) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    });
    reply.send(updatedUser);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error updating user' });
  }
}

async function deleteUserById(request, reply) {
  try {
    await prisma.user.delete({
      where: { id: parseInt(request.params.id) },
    });
    reply.send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error deleting user' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
