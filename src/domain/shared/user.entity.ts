import { Role } from '../models/role.enum';
import { BaseEntity } from './base.entity';

export abstract class UserEntity extends BaseEntity {
  username: string;

  email: string;

  password: string;

  address: string;

  telephone: string;

  role: Role;
}
