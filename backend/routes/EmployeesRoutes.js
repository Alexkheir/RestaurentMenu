const express = require('express');
const router = express.Router();
const EmployeeControllers = require('../controllers/EmployeeControllers');


router.post('/addEmployee', EmployeeControllers.addEmployee);
router.get('/getEmployees', EmployeeControllers.getEmployees);
router.post('/editEmployee', EmployeeControllers.editEmployee);
router.delete('/deleteEmployee', EmployeeControllers.deleteEmployee);
router.get('/getEmployee', EmployeeControllers.getEmployee);



module.exports = router;