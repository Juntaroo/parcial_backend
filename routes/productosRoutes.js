import express from "express";
import { createProduct,
    deleteProduct,
    searchProduct,
    searchallProducts,
    changeProduct,
    showOrder,
    filterProducts
 } from "../controllers/productosController.js";

const router = express.Router();

router.post("/productos", createProduct)
router.get("/productos", searchallProducts)
router.get("/productos", searchProduct)
router.put("/productos", changeProduct)
router.delete("/productos", deleteProduct)
router.get("/productos/ordenados", showOrder)
router.get("/productos/filtrados", filterProducts)
router.get("/");

export default router;