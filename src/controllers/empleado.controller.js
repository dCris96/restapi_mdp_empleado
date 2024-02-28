import {pool} from '../conexion.js'

export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleado')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Sucedió algún error al traer los empleados"
        })
    }
}

export const getEmpleado = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: 'Empleado not found'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Sucedio algún error al traer el empleado por id"
        })
    }
}

export const createEmpleado = async (req, res) => {
    const {dni, apellidos, nombres, nacimiento, celular, correo, cargo} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO empleado (dni, apellidos, nombres, nacimiento, celular, correo, cargo) VALUES (?,?,?,?,?,?,?)', [dni, apellidos, nombres, nacimiento, celular, correo, cargo])
        res.send({
            id: rows.insertId,
            dni,
            apellidos,
            nombres,
            nacimiento,
            celular,
            correo,
            cargo
        })
    } catch (error) {
        return res.status(500).json({
            message: "Susedió algún error al crear un empleado"
        })
    }
};

export const deleteEmpleado = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleado WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Sucedió algún erroral eliminar un usuario"
        })
    }
}

export const updateEmpleado = async (req, res) => {
    const {id} = req.params
    const {dni, apellidos, nombres, nacimiento, celular, correo, cargo} = req.body

    try {        
        const [result] = await pool.query('UPDATE empleado SET dni = IFNULL(?, dni), apellidos = IFNULL(?, apellidos), nombres = IFNULL(?, nombres), nacimiento = IFNULL(?, nacimiento), celular = IFNULL(?, celular), correo = IFNULL(?, correo), cargo = IFNULL(?, cargo) WHERE id = ?', [dni, apellidos, nombres, nacimiento, celular, correo, cargo, id])

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Empleado not found'
        })

        const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [id])

        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Sucedió algo al actualizar el usuario"
        })
    }
}