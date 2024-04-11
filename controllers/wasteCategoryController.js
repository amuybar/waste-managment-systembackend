// controllers/wasteCategoryController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createWasteCategory(request, reply) {
  try {
    const newWasteCategory = await prisma.wasteCategory.create({
      data: request.body,
    });
    reply.code(201).send(newWasteCategory);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error creating waste category' });
  }
}

async function getAllWasteCategories(request, reply) {
  try {
    const wasteCategories = await prisma.wasteCategory.findMany();
    reply.send(wasteCategories);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving waste categories' });
  }
}

async function getWasteCategoryById(request, reply) {
  try {
    const wasteCategory = await prisma.wasteCategory.findUnique({
      where: { id: parseInt(request.params.id) },
    });
    if (!wasteCategory) {
      reply.code(404).send({ message: 'Waste category not found' });
    } else {
      reply.send(wasteCategory);
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving waste category' });
  }
}

async function updateWasteCategoryById(request, reply) {
  try {
    const updatedWasteCategory = await prisma.wasteCategory.update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    });
    reply.send(updatedWasteCategory);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error updating waste category' });
  }
}

async function deleteWasteCategoryById(request, reply) {
  try {
    await prisma.wasteCategory.delete({
      where: { id: parseInt(request.params.id) },
    });
    reply.send({ message: 'Waste category deleted successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error deleting waste category' });
  }
}

module.exports = {
  createWasteCategory,
  getAllWasteCategories,
  getWasteCategoryById,
  updateWasteCategoryById,
  deleteWasteCategoryById,
};
