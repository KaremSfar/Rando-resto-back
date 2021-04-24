import { Injectable } from '@nestjs/common';
import { Dish } from 'src/domain/models/dish';
import { DishRepository } from '../repositories/dish.repository';

@Injectable()
export class DishesInteractor {
  constructor(private dishRepository: DishRepository) {}

  async createDish(dish: Dish): Promise<Dish> {
    return await this.dishRepository.createDish(dish);
  }

  async getDishes(): Promise<Dish[]> {
    return await this.dishRepository.find();
  }

  async getRandomDish(): Promise<Dish> {
    return await this.dishRepository.findRandomDish();
  }
}
