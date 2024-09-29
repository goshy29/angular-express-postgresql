const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    recipe: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        tableName: "cake_blog"
    }
);

module.exports = Blog;