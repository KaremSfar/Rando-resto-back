import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepo } from 'src/infrastructure/database/repositories/customer.repo';
import { DishRepo } from 'src/infrastructure/database/repositories/dish.repo';
import { IngredientsRepository } from 'src/infrastructure/database/repositories/ingredient.repository';
import { RestoOwnerRepo } from 'src/infrastructure/database/repositories/resto-owner.repo';

@Module({
  imports: [TypeOrmModule.forFeature([RestoOwnerRepo, CustomerRepo, DishRepo])],
  providers: [],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
