// controllers/pickupScheduleController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPickupSchedule(request, reply) {
  try {
    const newPickupSchedule = await prisma.pickupSchedule.create({
      data: request.body,
    });
    reply.code(201).send(newPickupSchedule);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error creating pickup schedule' });
  }
}

async function getAllPickupSchedules(request, reply) {
  try {
    const pickupSchedules = await prisma.pickupSchedule.findMany();
    reply.send(pickupSchedules);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving pickup schedules' });
  }
}

async function getPickupScheduleById(request, reply) {
  try {
    const pickupSchedule = await prisma.pickupSchedule.findUnique({
      where: { id: parseInt(request.params.id) },
    });
    if (!pickupSchedule) {
      reply.code(404).send({ message: 'Pickup schedule not found' });
    } else {
      reply.send(pickupSchedule);
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving pickup schedule' });
  }
}

async function updatePickupScheduleById(request, reply) {
  try {
    const updatedPickupSchedule = await prisma.pickupSchedule.update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    });
    reply.send(updatedPickupSchedule);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error updating pickup schedule' });
  }
}

async function deletePickupScheduleById(request, reply) {
  try {
    await prisma.pickupSchedule.delete({
      where: { id: parseInt(request.params.id) },
    });
    reply.send({ message: 'Pickup schedule deleted successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error deleting pickup schedule' });
  }
}

module.exports = {
  createPickupSchedule,
  getAllPickupSchedules,
  getPickupScheduleById,
  updatePickupScheduleById,
  deletePickupScheduleById,
};
