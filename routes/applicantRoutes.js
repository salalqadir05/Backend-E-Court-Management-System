 const router = require('express').Router();
 const {register,login} = require("../controller/applicantController");

 router.post("/register",register);
 router.post("/login",login);




 module.exports = router ;