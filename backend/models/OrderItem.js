module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        OrderItem_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        OrderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Order',
                key: 'Order_Id'
            }
        }
    }, {
        freezeTableName: true
    });

    OrderItem.associate = models => {
        OrderItem.belongsTo(models.Order, {
            foreignKey: 'OrderId',
            as: 'order'
        });
    };

    return OrderItem;
};