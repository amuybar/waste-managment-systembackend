// routes/serviceRequest.js

const serviceRequestController = require('../controllers/serviceRequestController');

function serviceRequestRoutes(fastify, options, done) {
  fastify.post('/service-requests', serviceRequestController.createServiceRequest);
  fastify.get('/service-requests', serviceRequestController.getAllServiceRequests);
  fastify.get('/service-requests/:id', serviceRequestController.getServiceRequestById);
  fastify.put('/service-requests/:id', serviceRequestController.updateServiceRequestById);
  fastify.delete('/service-requests/:id', serviceRequestController.deleteServiceRequestById);

  done();
}

module.exports = serviceRequestRoutes;
