const Employee = require('../models/employee.model');

const employeeController = {

    getEmployees: async (req, res) => {
        try {
            const employees = await Employee.find();
            if(employees) {
                res.json(employees);
            } else {
                res.status(404).json({ message: 'Not employees found' });
            }
        } catch(err) {
            res.status(500).json({ 
                message: 'Error getting employees',
                error: err
            });
        }
    },

    getEmployee: async (req, res) => {
        try {
            const employeeID = req.params.id;
            const employee = await Employee.findById(employeeID);
            if(employee) {
                res.json(employee);
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch(err) {
            res.status(500).json({ 
                message: 'Error getting employee',
                error: err
            });
        }
    },

    createEmployee: async (req, res) => {
       try {
            const employee = new Employee(req.body);
            const newEmployee = await employee.save();
            res.json({
                message: 'Employee saved',
                employee: newEmployee
            });
       } catch(err) {
            res.status(500).json({ 
                message: 'Error saving employee',
                error: err
            });
       }
    },

    updateEmployee: async (req, res) => { 
        try {
            const employeeID = req.params.id;
            const newEmployeeData = req.body;
            const updatedEmployee = await Employee.findByIdAndUpdate(employeeID, newEmployeeData, { new: true });
            if(updatedEmployee){
                res.json({
                    message: 'Employee updated',
                    employee: updatedEmployee
                });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch(err) {
            res.status(500).json({ 
                message: 'Error updating employee',
                error: err
            });
        }
    },

    deleteEmployee: async (req, res) => {
        try {
            const employeeID = req.params.id;
            const deletedEmployee = await Employee.findByIdAndDelete(employeeID);
            if(deletedEmployee) {
                res.json({
                    message: 'Employee deleted',
                    employee: deletedEmployee
                });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch(err) {
            res.status(500).json({ 
                message: 'Error deleting employee',
                error: err
            });
        }
    }

};

module.exports = employeeController;