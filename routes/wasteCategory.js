// routes/wasteCategory.js

const wasteCategoryController = require('../controllers/wasteCategoryController');

function wasteCategoryRoutes(fastify, options, done) {
  fastify.post('/waste-categories', wasteCategoryController.createWasteCategory);
  fastify.get('/waste-categories', wasteCategoryController.getAllWasteCategories);
  fastify.get('/waste-categories/:id', wasteCategoryController.getWasteCategoryById);
  fastify.put('/waste-categories/:id', wasteCategoryController.updateWasteCategoryById);
  fastify.delete('/waste-categories/:id', wasteCategoryController.deleteWasteCategoryById);

  done();
}

module.exports = wasteCategoryRoutes;
