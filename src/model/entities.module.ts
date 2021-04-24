import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentRepo } from 'src/infrastructure/database/repositories/component.repo';
import { DishRepo } from 'src/infrastructure/database/repositories/dish.repo';
import { IngredientsRepository } from 'src/infrastructure/database/repositories/ingredient.repository';
import { CustomerRepo } from './repositories/customer.repo';
import { RestoOwnerRepo } from './repositories/resto-owner.repo';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestoOwnerRepo,
      CustomerRepo,
      IngredientsRepository,
      ComponentRepo,
      DishRepo,
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
