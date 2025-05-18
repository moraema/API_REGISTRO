import db from '../configs/db.confing.js';

class Tarea {
    constructor({id, titulo, descripcion, fecha }) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    async createTarea() {
        const connection = await db.createConnection();

        const [result] = await connection.query(
            'INSERT INTO tareas (titulo, descripcion, fecha) VALUES (?, ?, ?)',
            [this.titulo, this.descripcion, this.fecha]
        );

        connection.end();

         if (result.insertId === 0) {
            throw new Error('Error al crear el usuario');
        }

        return result.insertId;
    }


    static async deletetarea(id) {
    const connection = await db.createConnection();

    const [result] = await connection.execute("DELETE FROM tareas WHERE id = ?", [id]);
    
    connection.end();

    if (result.affectedRows === 0) {
        return false; 
    }

    return true; 
   }

}

export default Tarea;