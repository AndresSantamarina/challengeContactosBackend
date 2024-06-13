import Contacto from "../database/model/contacto.js";

export const listarContactos = async (req, res) =>{
    try {
        const contactos = await Contacto.find()
        res.status(200).json(contactos)
    } catch (error) {
        res.status(400).json({
            mensaje: "No se encontró ningún contacto"
        })
    }
}

export const obtenerContacto = async (req, res)=>{
    try {
        const contactoBuscado = await Contacto.findById(req.params.id)
        res.status(200).json(contactoBuscado)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje:"No se econtró el contacto"
        })
    }
}

export const crearContacto = async (req, res)=>{
    try {
        // const {nombre, mail, telefono} = req.body
        const contactoNuevo = new Contacto(req.body)
        await contactoNuevo.save()
        res.status(201).json({
            mensaje: "El contacto fue creado correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Error al intentar crear un contacto"
        })
    }
}

export const editarContacto = async (req, res)=>{
    try {
        const buscarContacto = await Contacto.findById(req.params.id)
        if(!buscarContacto){
            return res.status(404).json({
                mensaje: "El id es incorrecto"
            })
        }
        await Contacto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "Contacto modificado"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Error, no se pudo editar"
        })
    }
}

export const borrarContacto = async (req,res)=>{
    try {
        const buscarContacto = await Contacto.findById(req.params.id)
        if(!buscarContacto){
            return res.status(404).json({
                mensaje: "Id incorrecto"
            })
        }
        await Contacto.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "Contacto eliminado"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Error al eliminar el contacto"
        })
    }
}

export const modificarFavorito = async (req, res) => {
    try {
      const contacto = await Contacto.findById(req.params.id);
      if (!contacto) {
        return res.status(404).json({
          mensaje: "El id es incorrecto",
        });
      }
      contacto.favorito = !contacto.favorito;
      await contacto.save();
      res.status(200).json({
        mensaje: "Estado de favorito modificado"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: "Error, no se pudo cambiar el estado de favorito",
      });
    }
  };
