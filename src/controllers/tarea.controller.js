import Tarea from "../models/tarea.model.js";
import bcrypt from "bcrypt";

const create = async (req, res) => {
    try {
        const {titulo, descripcion} = req.body;

        if (!titulo || !descripcion) {
            return res.status(400).json({ 
                message: "Faltan datos para crear la tarea",
                error: "Campos requeridos: titulo, descripcion" 
            });
        }

        const tarea = new Tarea({
            titulo,
            descripcion,
            fecha: new Date()
        });

        const result = await tarea.createTarea();

        if (!result) {
            return res.status(400).json({ 
                message: "Error al crear la tarea",
                error: "No se pudo crear la tarea" 
            });
            
        }

        return res.status(201).json({ 
            message: "Tarea creada correctamente",
            data: result
         });
        
    } catch (error) {
        return res.status(500).json({ 
            message: "Error al crear la tarea",
            error: error.message
         });
        
    }
}



const deleteUsuario = async(req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                message: "Faltan datos obligatorios",
                error: "Falta el id de la tarea"
            });
        }

        const resultado = await Tarea.deletetarea(id);

        if (!resultado) {
            return res.status(400).json({
                message: "Error al eliminar la tarea",
                error: "No se pudo eliminar la tarea"
            });
        }

        return res.status(200).json({
            message: "Usuario eliminado exitosamente",
            data: resultado
        });

    } catch (error) {
        return res.status(400).json({
            mensa: "Error en el servidor al eliminar el usuario",
            error: error.message
        })
    }
}


export const tareaController = {
    create,
    deleteUsuario
}