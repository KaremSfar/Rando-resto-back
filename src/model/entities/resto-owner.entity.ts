import { Entity, OneToMany } from 'typeorm';
import { UserEntity } from '../generic-entities/user.entity';
import { DishEntity } from './dish.entity';

@Entity('resto-owner')
export class RestoOwnerEntity extends UserEntity {
  @OneToMany(() => DishEntity, (dish) => dish.resto)
  dishes: DishEntity[];
}
