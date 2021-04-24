import { Dish } from 'src/domain/models/dish';

export interface DishRepository {
  createDish(dish: Dish): Promise<Dish>;

  // Returns the Components with it
  find(): Promise<Dish[]>;

  findRandomDish(): Promise<Dish>;
}
