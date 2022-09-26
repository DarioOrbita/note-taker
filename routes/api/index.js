const router = require('express').Router();
const noteRoutes = require('../api/noteRoutes');

router.use(noteRoutes);

module.exports = router;
