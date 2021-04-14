import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from 'src/model/entities/component.entity';
import { DishEntity } from 'src/model/entities/dish.entity';
import { RestoOwnerEntity } from 'src/model/entities/resto-owner.entity';
import { DishRepo } from 'src/model/repositories/dish.repo';
import { CreateDishDto } from '../dto/dishes.dto';

@Injectable()
export class DishesService {
  constructor(@InjectRepository(DishRepo) private dishRepo: DishRepo) {}

  createDish(createDishDto: CreateDishDto, resto: RestoOwnerEntity) {
    // Create components Objects
    const components: Component[] = [];
    for (const componentId of createDishDto.componentsIds) {
      components.push(<any>{ id: componentId });
    }

    // create the dish object
    const dish = this.dishRepo.create({
      resto: <any>{ id: resto.id },
      dishName: createDishDto.dishName,
      components: components,
    });

    // save the newly created dish
    return this.dishRepo.save(dish);
  }

  getDishes() {
    return this.dishRepo.find({
      relations: ['components'],
    });
  }
}
