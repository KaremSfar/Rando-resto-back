import { Entity } from 'typeorm';
import { UserEntity } from '../generic-entities/user.entity';

@Entity('resto-owner')
export class RestoOwnerEntity extends UserEntity {}
