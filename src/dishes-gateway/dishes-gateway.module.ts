import { Module } from '@nestjs/common';
import { EntitiesModule } from 'src/model/entities.module';
import { DishesConsumerController } from './dishes/dishes-consumer.controller';
import { DishesRestoController } from './dishes/dishes-resto.controller';
import { DishesService } from './dishes/dishes.service';

@Module({
  imports: [EntitiesModule],
  providers: [DishesService],
  controllers: [DishesRestoController, DishesConsumerController],
})
export class DishesGatewayModule {}
