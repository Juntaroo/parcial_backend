import { DataTypes } from "sequelize";
import sequelize from "./conection.js";
//Utilicé como referencia el tp 3 que nos dejó

const Producto = sequelize.define('Producto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Producto