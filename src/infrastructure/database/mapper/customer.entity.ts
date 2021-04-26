import { Entity } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('customer')
export class CustomerEntity extends UserEntity {}
