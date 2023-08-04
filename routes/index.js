const router = require('express').Router();
const apiRoutes = require('./api');

// prefix all routes defined in user-routes.js with `/users`
router.use('/api', apiRoutes);


module.exports = router;
