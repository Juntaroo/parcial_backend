import Producto from "../db/productos.js";
import { Op } from "sequelize";

const crearProducto= async (producto) =>{
    await Producto.create(producto)
    return producto;
}

const borrarProducto = async (id) => {
    await Producto.destroy({ where: { id } });
};

const obtenerProducto = async (id) => {
    await Producto.findOne({ where: { id } });
    return producto
};

const buscarProductos = async () => {
    const productos = await Producto.findAll();
    return productos;
};

const actualizarproducto = async (id, newName, newPrice, newAmount, newCategory) => {
    const producto = await Producto.findOne({ where: { id } });
    producto.name = newName;
    producto.price = newPrice;
    producto.amount = newAmount;
    producto.category = newCategory;
    await producto.save();
    return producto;
}

const ordenarProductos = async (orden) => {
    const ordenado = ['name', 'price', 'amount'].includes(orden) ? orden : 'id'; 
        const productos = await Producto.findAll({
            order: [[ordenado, 'ASC']] 
        });
    return productos;
};

const filtrarProductos = async (name, minprice, maxprice, minamount, maxamount, category) =>{
    const condicion = {};

  if (name) {
    condicion.name = {
      [Op.like]: `%${name}%`,
    };
  }

  if (minprice && maxprice) {
    condicion.price = {
      [Op.between]: [parseFloat(minprice), parseFloat(maxprice)],
    };
  } else if (minprice) {
    condicion.price = {
      [Op.gte]: parseFloat(minprice),
    };
  } else if (maxprice) {
    condicion.price = {
      [Op.lte]: parseFloat(maxprice),
    };
  }

  if (category) {
    condicion.category = category;
  }

  if (minamount && maxamount) {
    condicion.amount = {
      [Op.between]: [parseFloat(minamount), parseFloat(maxamount)],
    };
  } else if (minamount) {
    condicion.amount = {
      [Op.gte]: parseFloat(minamount),
    };
  } else if (maxamount) {
    condicion.amount = {
      [Op.lte]: parseFloat(maxamount),
    };
  }
  return await Producto.findAll({
    where: condicion,
  });
}


export {
    crearProducto,
    borrarProducto,
    obtenerProducto,
    buscarProductos,
    actualizarproducto,
    ordenarProductos,
    filtrarProductos
};