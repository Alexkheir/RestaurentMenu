const { Admin } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi'); 
const db = require('../models');

exports.register = async (req, res) => {
    const { email, password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user=await db.Admin.create({
        username,
        email,
        password: hashedPassword
    });
    res.status(201).json({ message: 'Admin registered successfully', user });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(402).json({ error: error.details[0].message });

    try {
        const existingAdmin = await db.Admin.findOne({ where: { email } });
        if (!existingAdmin) return res.status(401).json({ error: 'Invalid email' }); 

        const validPassword = await bcrypt.compare(password, existingAdmin.password);
        if (!validPassword) return res.status(400).json({ error: 'Incorrect password' }); 

        const token = jwt.sign({ id: existingAdmin.Admin_uuid, username: existingAdmin.username, email: existingAdmin.email }, "thiskeyissecret", { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error("Error logging in admin:", error); 
        res.status(500).json({ error: error.message });
    }
};