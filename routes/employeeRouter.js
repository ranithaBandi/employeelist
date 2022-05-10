import express from 'express';

const router = express.Router();
import {employees,employee,createemployeelist,updateEmployee,deleteEmployee} from '../cotrollers/employeeController'



//get all books
router.get('/employees',employees);



//get single book
router.get('/employees/:id',employee);

//post create book
router.post('/createemployeedetails',createemployeelist);

//put update book
router.put('/employees/:id',updateEmployee)


//delete delete book 
router.delete('/employees/:id',deleteEmployee);


export default router;