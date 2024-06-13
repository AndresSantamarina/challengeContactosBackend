import { Router } from "express";
import { borrarContacto, crearContacto, editarContacto, listarContactos, modificarFavorito } from "../controllers/contactos.controllers.js";

const router = Router()

router.route("/").get(listarContactos).post(crearContacto)
router.route("/:id").put(editarContacto).delete(borrarContacto)
router.route("/favorito/:id").put(modificarFavorito);

export default router