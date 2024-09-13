module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        Order_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Pending'
        }
    }, {
        freezeTableName: true
    });


    return Order;
};