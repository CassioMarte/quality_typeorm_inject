import { Router, Request, Response } from 'express';
import { UserController } from '../controller/User.Controller';
import { UserRepository } from '../repositories/User.Repository';
import { UserService } from '../service/User.Service';

export const usersRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Forma correta de definir a rota
usersRouter.post('/', async (req: Request, res: Response) => {
  await userController.createUserController(req, res);
});

usersRouter.get('/', async (req: Request, res: Response) => {
  await userController.showAllUserController(req, res);
});


