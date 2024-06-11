import { DataTypes } from "sequelize";
import sequelize from "./conection.js";

const Producto = sequelize.define('Producto',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Producto