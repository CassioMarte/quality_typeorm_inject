import { Users } from '../modules/User.entities';
import { ICreateUser, UserRepository } from '../repositories/User.Repository';

export class UserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

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
