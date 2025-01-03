import { Request, Response } from 'express';
import { UserService } from '../service/User.Service';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService; 
  }

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

  showAllUserController = async (req:Request, res:Response) =>{
    try {
      const data = await this.userService.showUserService()

      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({
        success:false,
        message:'Internal server error'
      })
    }
  }
}
