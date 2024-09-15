const db = require('../models');
const Item = db.Item;

exports.addItem = async (req, res) => {
    //validate the request body
    const errors = {};
    if (!req.body.name) errors.name = 'Name is required';
    if (!req.body.price) errors.price = 'Price is required';
    if (!req.body.description) errors.description = 'Description is required';
    if (!req.file) errors.image = 'Image is required';
    const { name, price, description } = req.body;
    const image = req.file ? req.file.path : null;

    const item = await Item.findOne({ where: { name } });
    if (item) {
        errors.name = 'Item already exists';
        return res.status(422).json({ errors });
    }
    if (Object.keys(errors).length) {
        return res.status(422).json({ errors });
    }

    try {
        const newItem = await db.Item.create({ name, price, image, description });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item' });
    }
}

exports.getAllItems = async (req, res) => {
    try {
        const items = await db.Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get items' });
    }
}

exports.deleteItem = async (req, res) => {
    const { id } = req.body;
    try {
        await Item.destroy({ where: { Item_Id: id } });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

exports.getItem = async (req, res) => {
    const { id } = req.body;
    try {
        const item = await Item.findOne({ where: { Item_Id: id } });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get item' });
    }
}

exports.editItem = async (req, res) => {
    const { id, name, price, description } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const item = await Item.findOne({ where: { Item_Id: id } });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        const updatedData = { name, price, description };
        if (image) {
            updatedData.image = image;
        }

        await Item.update(updatedData, { where: { Item_Id: id } });
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update item' });
    }
}