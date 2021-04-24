import { Dish } from 'src/domain/models/dish';

export abstract class DishRepository {
  abstract createDish(dish: Dish): Promise<Dish>;

  // Returns the Components with it
  abstract find(): Promise<Dish[]>;

  abstract findRandomDish(): Promise<Dish>;
}
