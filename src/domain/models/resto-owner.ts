import { UserEntity } from '../shared/user.entity';
import { DishEntity } from './dish';

export class RestoOwnerEntity extends UserEntity {
  dishes: DishEntity[];
}
