import { Request, Response } from 'express';
import { UserService } from '../service/User.Service';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  createUserController = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;

      await this.userService.createUserService(data);

      res.status(201).json({
        success: true,
        message: 'User created successfully',
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };

  showAllUserController = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const data = await this.userService.showUserService();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
}
