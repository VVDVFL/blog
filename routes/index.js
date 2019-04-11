var router = require('express').Router();


router.use('/webapi', require('./webapi'));

module.exports = router;
