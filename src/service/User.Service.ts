import { inject, injectable } from 'tsyringe';
import { Users } from '../modules/User.entities';
import { ICreateUser, UserRepository } from '../repositories/User.Repository';

@injectable()
export class UserService {
 
 constructor(@inject(UserRepository) private userRepository: UserRepository){}

  createUserService = async (data: ICreateUser): Promise<Users> => {
    const { name, email, phone } = data;

    const emailExisting = await this.userRepository.emailExisting(email);

    if (emailExisting) {
      throw new Error('E-mail already exists'); //ajustar error
    }

    const newUser = await this.userRepository.createUser({
      name,
      email,
      phone,
    });

    return newUser;
  };

  showUserService = async (): Promise<Users[]> => {
    return await this.userRepository.showUsers();
  };
}
