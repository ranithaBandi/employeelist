import Employee from '../models/employee';

//get all employee details
export const employees = async(req,res)=>{

    try
    {
      let employee = await Employee.find();
      res.status(200).json(employee);    
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }


}



//get single employee

export const employee = async (req,res) => {

    let employeeId = req.params.id;

    try{
       let employees = await Employee.findById(employeeId);
       res.status(200).json(employees);
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}

// post create employee details
export const createemployeelist = async (req,res) => {
    let newEmployee = {
        isbn: req.body.isbn,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mail:req.body.mail,
        description:req.body.description
        
        

    }

    try
    {
      //verify employeedetails exists already
      let employee = await Employee.findOne({firstname: newEmployee.firstname})

      if(employee)
      {
          return res.status(400).json({
              msg:"Employee list is already exist",
          })
      }
      //save to db if employee does not exist
      employee = new Employee(newEmployee);
      employee = await employee.save();

      res.status(201).json({
          result: "Employee details Added Successfully",
          employee: employee
      })
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}



export const updateEmployee = async (req,res) => {
    
    let employeeId = req.params.id;

    let updateEmployee = {
        isbn: req.body.isbn,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mail:req.body.mail,
        description:req.body.description,
        
        

    }

    try
    {
      //check employeedetails does not exists 
      let employee = await Employee.findById(employeeId);

      if(!employee)
      {
          return res.status(400).json({
              msg:"Employee details does not exists"
          })
      }
      //update db
      employee = await Employee.findByIdAndUpdate(
          employeeId,
          {
              $set: updateEmployee
          },
          { new: true}   
      )
      

      res.status(201).json({
          result: "employee details Data Updated Successfully",
          employee: employee
      })
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}

export const deleteEmployee = async (req,res) => {
    
    let employeeId = req.params.id;

    
    try
    {
      //check book does not exists 
    let employee = await Employee.findById(employeeId);

      if(!employee)
      {
          return res.status(400).json({
              msg:"employee list does not exists"
          })
      }
      //delete db
      employee = await Employee.findByIdAndDelete(employeeId);
      

      res.status(201).json({
          result: "employee deleted Successfully",
          employeeId: employeeId 
      })
    }
    catch(error)
    {
        console.log(error);   
        res.status(500).json({
            error: error.message
        })
    }

}




