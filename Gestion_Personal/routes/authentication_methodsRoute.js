const express = require('express');
const router = express.Router();
const authenticationMethodsController = require('../controllers/authentification_methodsController');

// Define rutas para operaciones de Authentication_methods
router.post('/authentication-methods', authenticationMethodsController.createAuthenticationMethod);
router.get('/authentication-methods', authenticationMethodsController.getAllAuthenticationMethods);
router.get('/authentication-methods/:idAuthentication', authenticationMethodsController.getAuthenticationMethodById);
router.put('/authentication-methods/:idAuthentication', authenticationMethodsController.updateAuthenticationMethod);
router.delete('/authentication-methods/:idAuthentication', authenticationMethodsController.deleteAuthenticationMethod);

module.exports = router;
