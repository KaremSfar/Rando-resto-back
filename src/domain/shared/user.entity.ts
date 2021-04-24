import { Role } from '../models/role.enum';
import { BaseEntity } from './base.entity';

export interface User extends BaseEntity {
  username: string;

  email: string;

  password: string;

  address: string;

  telephone: string;

  role: Role;
}
