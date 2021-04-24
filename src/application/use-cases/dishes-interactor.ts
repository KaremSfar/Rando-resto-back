import { Injectable } from '@nestjs/common';
import { Dish } from 'src/domain/models/dish';
import { DishRepository } from '../repositories/dish.repository';

@Injectable()
export class DishesInteractor {
  constructor(private dishRepository: DishRepository) {}

  createDish(dish: Dish): Dish {
    return this.dishRepository.createDish(dish);
  }

  getDishes(): Dish[] {
    return this.dishRepository.find();
  }

  getRandomDish(): Dish {
    return this.dishRepository.findRandomDish();
  }
}
