import sequelize from "./db/conection.js"
import express from "express"
import morgan from "morgan";
import cors from "cors";
import routerProducts from "./routes/productosRoutes.js";

const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(cors());


sequelize.authenticate();
console.log('Conexión a la base de datos establecida correctamente.');


sequelize.sync({ force: true });
console.log('Base de datos sincronizada correctamente.');


app.use(express.json());
app.use(routerProducts);

app.listen(port,()=>{
    console.log("En marcha")
})