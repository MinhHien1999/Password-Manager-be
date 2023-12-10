const appController = require("../controllers/app.controller");
const appMiddleware = require("../middlewares/app.middleware");
const express = require("express");
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const file  = fs.readFileSync('./swagger-doc.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get("/account", appController.getAccount);
router.get("/account/:id",appController.getAccountById);
router.get("/account/show/:id",appController.showPasswordById);
router.post("/account/",appMiddleware.validateFormAccountCreate, appController.createAccount);
router.put("/account/:id",appMiddleware.validateFormAccountUpdate, appController.updateAccount);
router.delete("/account/:id", appController.deleteAccount);
router.get("/category/", appController.getCategory);
router.get("/category/:id", appController.getAccountByCategoryId);
router.put("/category/:id",appMiddleware.validateFormCategory, appController.updateCategory);
router.post("/category/",appMiddleware.validateFormCategory, appController.createCategory);
router.delete("/category/:id", appController.deleteCategory);

module.exports = {
  appRouter: router,
}
