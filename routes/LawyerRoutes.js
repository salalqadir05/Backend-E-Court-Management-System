const router = require('express').Router();
const {register} = require("../routes/LawyerRoutes");


router.post("/register",register);


module.exports = router ;

