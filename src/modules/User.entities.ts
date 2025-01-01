import { Column, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuid} from 'uuid'

@Entity('users')
export class Users{
  @PrimaryColumn({ type: "uuid" })
  readonly id: string;
  
  @Column({type:'varchar', length:200})
  name:string;

  @Column({type:'varchar', length: 200})
  email:string;

  @Column({type:'varchar', length: 12})
  phone:string;

  @Column({type:'datetime', default: ()=> 'now()' })
  created_at:Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}