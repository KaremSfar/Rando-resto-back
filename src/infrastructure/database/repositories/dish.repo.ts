import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishRepository } from 'src/application/repositories/dish.repository';
import { Dish } from 'src/domain/models/dish';
import { Repository } from 'typeorm';
import { DishEntity } from '../mapper/dish.entity';

@Injectable()
export class DishRepo implements DishRepository {
  constructor(
    @InjectRepository(DishEntity)
    private typeormDishRepo: Repository<DishEntity>,
  ) {}
  find(): Promise<Dish[]> {
    return this.typeormDishRepo.find({ relations: ['components'] });
  }

  createDish(dish: Dish): Promise<Dish> {
    return this.typeormDishRepo.save(dish);
  }
  findRandomDish(): Promise<Dish> {
    const dish = this.typeormDishRepo
      .createQueryBuilder('dish')
      .select('*')
      .orderBy('RAND()')
      .limit(1)
      .execute();

    return dish;
  }
}
