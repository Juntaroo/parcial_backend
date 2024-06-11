import sequelize from "./db/conection.js"
import express from "express"
import routerProducts from "./routes/productosRoutes.js";
import Producto from "./db/productos.js";

const app = express();
const port = 3000;


sequelize.authenticate();
console.log('Conexión a la base de datos establecida correctamente.');

//Sincronizo el modelo con la base de datos
sequelize.sync({ force: true });
console.log('Base de datos sincronizada correctamente.');



app.use(express.json());
app.use(routerProducts);

app.listen(port,()=>{
    console.log("En marcha")
})