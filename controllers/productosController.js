
import { crearProducto,
    borrarProducto,
    obtenerProducto,
    buscarProductos,
    actualizarproducto,
    ordenarProductos,
    filtrarProductos
 } from "../models/productoModel.js";

const createProduct = async (req, res) => {
    const producto = await crearProducto(req.query);
    res.status(201).json({ msj: "se creó su producto", producto});
};

const deleteProduct = async (req, res) => {
    const { id } = req.query;
    const resultado = await borrarProducto(id);
    res.status(200).json({ msg: "producto eliminado", resultado});
};

const searchProduct = async (req, res) =>{
    const { id } = req.query;
    await obtenerProducto(id);
    res.status(200).json({ msg: "se obtuvo su producto" });
};


const searchallProducts = async (req, res) => {
    const muestreo = await buscarProductos();
    res.status(200).json({msg: "Todos los productos",muestreo});
};

const changeProduct = async (req, res) => {
    const { id, newName, newPrice, newAmount, newCategory } = req.query;
    const producto = await actualizarproducto(id, newName, newPrice, newAmount, newCategory);
    res.status(200).json({msg: "Producto modificado", producto });
};

const showOrder = async (req, res) => {
    const { orden } = req.query;
    const productos = await ordenarProductos(orden);
    res.status(200).json({msg: "Productos con orden encontrados",productos});
};

const filterProducts = async (req, res) => {
    const { name, minprice, maxprice, minamount, maxamount, category } = req.query;

  const productos = await filtrarProductos(name, minprice, maxprice, minamount, maxamount, category);

    res.status(200).json({ msg: "Productos encontrados", productos });
}

export {
    createProduct,
    deleteProduct,
    searchProduct,
    searchallProducts,
    changeProduct,
    showOrder,
    filterProducts
};