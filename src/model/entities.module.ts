import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentRepo } from './repositories/component.repo';
import { CustomerRepo } from './repositories/customer.repo';
import { IngredientsRepository } from './repositories/ingredient.repository';
import { RestoOwnerRepo } from './repositories/resto-owner.repo';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestoOwnerRepo,
      CustomerRepo,
      IngredientsRepository,
      ComponentRepo,
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
