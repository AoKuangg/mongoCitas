import * as UserConsulta from "../services/userServicios.js";

export const getAllUsers = async (req, res) => {
    try {
        let data = await UserConsulta.getAllUsers();
        res.status(200).send({status: 200,message:"Data obtenida",data})
    } catch (error) {
        res.status(500).send({status:500,message: "Error al obtener data", error: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        let data = await UserConsulta.getUserById(req.params.userID);
        res.status(200).send({status: 200,message:"Data obtenida",data})
    } catch (error) {
        res.status(500).send({status:500,message: "Error al obtener data", error: error.message});
    }
};

export const createUser = async (req, res) => {
    try {
        let data = await UserConsulta.createUser(req.body);
        res.status(200).send({status: 200,message:"Data guardada",data})
    } catch (error) {
        res.status(500).send({status:500,message: "Error al guardar la data", error: error.message});
    }
};