const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// prefix all routes defined in user-routes.js with `/users`
router.use('/users', userRoutes);

// prefix all routes defined in thought-routes.js with `/thoughts`
router.use('/thoughts', thoughtRoutes);

module.exports = router;

