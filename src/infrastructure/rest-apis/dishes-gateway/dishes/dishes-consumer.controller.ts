import { Controller, Get } from '@nestjs/common';
import { DishesInteractor } from 'src/application/use-cases/dishes-interactor';
import { DishQueryFilter } from '../../../../application/services/dish-query-filter';
import { DishFilter } from '../decorators/dish.filter.decorator';

@Controller('dishes/consumer')
export class DishesConsumerController {
  constructor(private dishesInteractor: DishesInteractor) {}

  @Get()
  getRandomDish(@DishFilter() filter: DishQueryFilter) {
    return this.dishesInteractor.getRandomDish(filter);
  }
}
