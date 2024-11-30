const usercontroller = require("../controllers/usersModel")

const router = require("express").Router();
router.post('/user', usercontroller.addUser);// post user api

router.get('/:email', usercontroller.userData); // get details using eMAIL

module.exports = router;