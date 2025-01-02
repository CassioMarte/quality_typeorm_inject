import { Request, Response } from 'express';
import { UserService } from '../service/User.Service';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserController {
 
  constructor(@inject(UserService) private userService:UserService) { }

  createUserController = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const data = req.body;
      await this.userService.createUserService(data);

      return res.status(201).json({
        success: true,
        message: 'User created successfully',
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
}
