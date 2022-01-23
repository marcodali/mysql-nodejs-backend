// Import User Model
import User from "../models/user.model.js";
 
// Get all users
export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll({
            order: [['user_id', 'DESC']]
        });
        res.send(user);
    } catch (err) {
        console.error(err);
        res.status(400).send({
            message: 'algo malo paso',
        });
    }
}
 
// Get user by id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.send(user[0]);
    } catch (err) {
        console.error(err);
        res.status(400).send({
            message: 'algo malo paso',
        });
    }
}
 
// Create a new user
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            message: 'algo malo paso',
        });
    }
}
 
// Update user by id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            message: 'algo malo paso',
        });
    }
}
 
// Delete user by id
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                user_id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.error(err);
        res.status(400).send({
            message: 'algo malo paso',
        });
    }
}