module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        Employee_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        employeeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    }, {
        freezeTableName: true
    });
    return Employee;
}