import { DishEntity } from 'src/infrastructure/database/mapper/dish.entity';
import { Entity, OneToMany } from 'typeorm';
import { UserEntity } from '../generic-entities/user.entity';

@Entity('resto-owner')
export class RestoOwnerEntity extends UserEntity {
  @OneToMany(() => DishEntity, (dish) => dish.resto)
  dishes: DishEntity[];
}
