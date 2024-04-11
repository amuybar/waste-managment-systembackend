// index.js

const fastify = require('fastify')();
const fastifySwagger = require('@fastify/swagger');
const fastifySwaggerUi = require('@fastify/swagger-ui');
require('dotenv').config();

fastify.register(fastifySwagger);  // Register @fastify/swagger first
fastify.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Waste Management System API',
      description: 'API documentation for the Waste Management System',
      version: '1.0.0',
    },
  },
});
fastify.get('/',function(req,res){
  res.send('Hello World!');
})

// Import routes
const userRoutes = require('./routes/userRoutes');
const wasteCategoryRoutes = require('./routes/wasteCategory');
const pickupScheduleRoutes = require('./routes/pickupSchedule');
const serviceRequestRoutes = require('./routes/serviceRequest');
const paymentInformationRoutes = require('./routes/paymentInformation');

// Register routes
fastify.register(userRoutes);
fastify.register(wasteCategoryRoutes);
fastify.register(pickupScheduleRoutes);
fastify.register(serviceRequestRoutes);
fastify.register(paymentInformationRoutes);

const start = async () => {
  try {
    fastify.listen({ port: 9000 }, (err) => {
      if (err) throw err;
      console.log(`Server listening on port ${fastify.server.address().port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
