import { Controller, Get } from '@nestjs/common';
import { DishesInteractor } from 'src/application/use-cases/dishes-interactor';

@Controller('dishes/consumer')
export class DishesConsumerController {
  constructor(private dishesInteractor: DishesInteractor) {}

  @Get()
  getRandomDish() {
    return this.dishesInteractor.getRandomDish();
  }
}
