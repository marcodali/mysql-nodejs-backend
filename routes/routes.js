// Import express
import express from "express";
// Import User Controller
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../controllers/user.controller.js";
 
 // Init express router
const router = express.Router();
 
// Route get all users
router.get('/users', getUsers);
// Route get user by id
router.get('/users/:id', getUserById);
// Route create a new user
router.post('/users', createUser);
// Route update user by id
router.put('/users/:id', updateUser);
// Route delete user by id
router.delete('/users/:id', deleteUser);
 
// export router
export default router;