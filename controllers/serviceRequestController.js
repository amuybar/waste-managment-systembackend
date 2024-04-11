// controllers/serviceRequestController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createServiceRequest(request, reply) {
  try {
    const newServiceRequest = await prisma.serviceRequest.create({
      data: request.body,
    });
    reply.code(201).send(newServiceRequest);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error creating service request' });
  }
}

async function getAllServiceRequests(request, reply) {
  try {
    const serviceRequests = await prisma.serviceRequest.findMany();
    reply.send(serviceRequests);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving service requests' });
  }
}

async function getServiceRequestById(request, reply) {
  try {
    const serviceRequest = await prisma.serviceRequest.findUnique({
      where: { id: parseInt(request.params.id) },
    });
    if (!serviceRequest) {
      reply.code(404).send({ message: 'Service request not found' });
    } else {
      reply.send(serviceRequest);
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving service request' });
  }
}

async function updateServiceRequestById(request, reply) {
  try {
    const updatedServiceRequest = await prisma.serviceRequest.update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    });
    reply.send(updatedServiceRequest);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error updating service request' });
  }
}

async function deleteServiceRequestById(request, reply) {
  try {
    await prisma.serviceRequest.delete({
      where: { id: parseInt(request.params.id) },
    });
    reply.send({ message: 'Service request deleted successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error deleting service request' });
  }
}

module.exports = {
  createServiceRequest,
  getAllServiceRequests,
  getServiceRequestById,
  updateServiceRequestById,
  deleteServiceRequestById,
};
