const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authentificationController');


router.post('/authentications', authenticationController.createAuthentication);
router.get('/authentications', authenticationController.getAllAuthentications);
router.get('/authentications/:id', authenticationController.getAuthenticationById);
router.put('/authentications/:id', authenticationController.updateAuthentication);
router.delete('/authentications/:id', authenticationController.deleteAuthentication);

module.exports = router;
