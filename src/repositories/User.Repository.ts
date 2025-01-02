import { Repository } from 'typeorm';
import { Users } from '../modules/User.entities';
import { AppDataSource } from '../database/AppDataSource';
import { injectable } from "tsyringe";

export interface ICreateUser{
  name:string,
  email:string,
  phone:string
}

@injectable()
export class UserRepository {
  private readonly repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  emailExisting = async (email:string):Promise<Users| null>=>{
   const existing = await this.repository.findOne({where:{
    email
   }})

   return existing
  }

  
  createUser = async  (data:ICreateUser):Promise<Users> =>{
     const dataUser = this.repository.create(data)

     const newUser = await this.repository.save(dataUser)
     
     return newUser
    }

  showUsers = async ():Promise<Users[]>=>{
   return await this.repository.find()
  }

  showUserById = async (id:string):Promise<Users | null>=>{
    return await this.repository.findOne({where:{id}})
  }
}
