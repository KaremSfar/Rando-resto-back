import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentRepo } from 'src/infrastructure/database/repositories/component.repo';
import { CustomerRepo } from 'src/infrastructure/database/repositories/customer.repo';
import { DishRepo } from 'src/infrastructure/database/repositories/dish.repo';
import { IngredientsRepository } from 'src/infrastructure/database/repositories/ingredient.repository';
import { RestoOwnerRepo } from 'src/infrastructure/database/repositories/resto-owner.repo';
import { Component } from './mapper/component.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestoOwnerRepo,
      CustomerRepo,
      IngredientsRepository,
      Component,
      DishRepo,
    ]),
  ],
  providers: [ComponentRepo],
  exports: [TypeOrmModule, ComponentRepo],
})
export class EntitiesModule {}
