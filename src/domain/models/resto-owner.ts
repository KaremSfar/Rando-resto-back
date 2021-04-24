import { User } from '../shared/user.entity';
import { Dish } from './dish';

export interface RestoOwner extends User {
  dishes: Dish[];
}
