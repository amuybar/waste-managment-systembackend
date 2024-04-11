// routes/paymentInformation.js

const paymentInformationController = require('../controllers/paymentInformationController');

function paymentInformationRoutes(fastify, options, done) {
  fastify.post('/payment-information', paymentInformationController.createPaymentInformation);
  fastify.get('/payment-information', paymentInformationController.getAllPaymentInformation);
  fastify.get('/payment-information/:id', paymentInformationController.getPaymentInformationById);
  fastify.put('/payment-information/:id', paymentInformationController.updatePaymentInformationById);
  fastify.delete('/payment-information/:id', paymentInformationController.deletePaymentInformationById);

  done();
}

module.exports = paymentInformationRoutes;
