import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controller/User.Controller";


export const router = Router();
const userController = container.resolve(UserController);


router.post('/', userController.createUserController)
//router.post('/users', (req, res) => userController.createUserController(req, res));




// import { Request,Response, Router } from "express";
// import { UserRepository } from "../repositories/User.Repository";
// import { UserService } from "../service/User.Service";
// import { UserController } from "../controller/User.Controller";

// const router = Router();  

// const userRepository = new UserRepository();
// const userService = new UserService(userRepository);
// const userController = new UserController(userService);

// // Forma correta de definir a rota
// router.post('/users', async (req:Request, res:Response) => {
//     return await userController.createUserController(req, res);
// });