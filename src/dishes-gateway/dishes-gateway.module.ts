import { Module } from '@nestjs/common';
import { EntitiesModule } from 'src/model/entities.module';
import { DishesController } from './dishes/dishes.controller';
import { DishesService } from './dishes/dishes.service';

@Module({
  imports: [EntitiesModule],
  providers: [DishesService],
  controllers: [DishesController],
})
export class DishesGatewayModule {}
