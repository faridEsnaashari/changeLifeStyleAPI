const express = require ("express");
const router = express.Router();

const reportRoute = require(`${ global.paths.v1.routes.report }`);

router.use("/report", reportRoute);

module.exports = router;
