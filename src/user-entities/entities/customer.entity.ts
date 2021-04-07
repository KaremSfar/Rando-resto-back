import { Entity } from 'typeorm';
import { UserEntity } from '../generic-entities/user.entity';

@Entity('customer')
export class CustomerEntity extends UserEntity {}
