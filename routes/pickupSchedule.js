// routes/pickupSchedule.js

const pickupScheduleController = require('../controllers/pickupScheduleController');

function pickupScheduleRoutes(fastify, options, done) {
  fastify.post('/pickup-schedules', pickupScheduleController.createPickupSchedule);
  fastify.get('/pickup-schedules', pickupScheduleController.getAllPickupSchedules);
  fastify.get('/pickup-schedules/:id', pickupScheduleController.getPickupScheduleById);
  fastify.put('/pickup-schedules/:id', pickupScheduleController.updatePickupScheduleById);
  fastify.delete('/pickup-schedules/:id', pickupScheduleController.deletePickupScheduleById);

  done();
}

module.exports = pickupScheduleRoutes;
