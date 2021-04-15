import { Controller, Get } from '@nestjs/common';
import { DishesService } from './dishes.service';

@Controller('dishes/consumer')
export class DishesConsumerController {
  constructor(private dishesService: DishesService) {}

  @Get()
  getRandomDish() {
    return this.dishesService.getRandomDish();
  }
}
