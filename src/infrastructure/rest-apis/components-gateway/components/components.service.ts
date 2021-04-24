import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from 'src/infrastructure/database/mapper/component.entity';
import { ComponentRepo } from 'src/infrastructure/database/repositories/component.repo';
import { IngredientsRepository } from 'src/infrastructure/database/repositories/ingredient.repository';
import { CreateComponentDto } from '../dto/component-dto';

@Injectable()
export class ComponentsService {
  constructor(
    private componentRepo: ComponentRepo,
    @InjectRepository(IngredientsRepository)
    private ingredientsRepository: IngredientsRepository,
  ) {}

  async createComponent(
    createComponentDto: CreateComponentDto,
  ): Promise<Component> {
    throw new NotImplementedException();
  }

  getComponents(): Promise<Component[]> {
    throw new NotImplementedException();
  }
}
