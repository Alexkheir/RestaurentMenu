const Employee = require('../models/Employee');
const db = require('../models/index');

exports.addEmployee = async (req, res) => {
    try {
        const { employeeName, position, age, salary, gender, email } = req.body;
        console.log("these are data" ,employeeName, position, age, salary, gender, email);
        const existingEmployee = await db.Employee.findOne({ where: { email } });
        if (existingEmployee) {
   
            return res.status(400).json({ message: 'Employee with this email already exists' });
        }
        const employee = await db.Employee.create({ employeeName, position, age, salary, gender, email });
        res.status(201).json({ message: 'Employee added successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add employee', error: error.message });
    }
};

exports.getEmployees = async (req, res) => {

    try {
        const employees = await db.Employee.findAll();
        const employeeArray = employees.map(employee => employee.toJSON());
        res.status(200).json(employeeArray);
    } catch (error) {

        res.status(500).json({ message: 'Failed to get employees', error: error.message });
    }
};

exports.editEmployee = async (req, res) => {
    console.log("hii");
    try {
        const { id,employeeName, position, age, salary, gender, email } = req.body;
        console.log(id);
        
        const employee = await db.Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        await employee.update({ employeeName, position, age, salary, gender, email });
        res.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update employee', error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.body;
        const employee = await db.Employee.findByPk(id); 
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        await employee.destroy();
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete employee', error: error.message });
    }
};

exports.getEmployee = async (req, res) => {
    try {
        const { id } = req.query;
        const employee = await db.Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get employee', error: error.message });
    }
};


