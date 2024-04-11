// controllers/paymentInformationController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPaymentInformation(request, reply) {
  try {
    const newPaymentInformation = await prisma.paymentInformation.create({
      data: request.body,
    });
    reply.code(201).send(newPaymentInformation);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error creating payment information' });
  }
}

async function getAllPaymentInformation(request, reply) {
  try {
    const paymentInformation = await prisma.paymentInformation.findMany();
    reply.send(paymentInformation);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving payment information' });
  }
}

async function getPaymentInformationById(request, reply) {
  try {
    const paymentInformation = await prisma.paymentInformation.findUnique({
      where: { id: parseInt(request.params.id) },
    });
    if (!paymentInformation) {
      reply.code(404).send({ message: 'Payment information not found' });
    } else {
      reply.send(paymentInformation);
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error retrieving payment information' });
  }
}

async function updatePaymentInformationById(request, reply) {
  try {
    const updatedPaymentInformation = await prisma.paymentInformation.update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    });
    reply.send(updatedPaymentInformation);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error updating payment information' });
  }
}

async function deletePaymentInformationById(request, reply) {
  try {
    await prisma.paymentInformation.delete({
      where: { id: parseInt(request.params.id) },
    });
    reply.send({ message: 'Payment information deleted successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: 'Error deleting payment information' });
  }
}

module.exports = {
  createPaymentInformation,
  getAllPaymentInformation,
  getPaymentInformationById,
  updatePaymentInformationById,
  deletePaymentInformationById,
};
