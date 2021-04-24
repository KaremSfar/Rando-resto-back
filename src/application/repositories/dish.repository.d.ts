import { Dish } from 'src/domain/models/dish';

export interface DishRepository {
  createDish(dish: Dish): Dish;

  // Returns the Components with it
  find(): Dish[];

  findRandomDish(): Dish;
}
