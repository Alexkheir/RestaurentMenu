module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        Admin_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => require('crypto').randomBytes(20).toString('hex')
        }
    }, {
        freezeTableName: true
    });
    return Admin;
}