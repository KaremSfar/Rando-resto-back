import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from 'src/model/entities/component.entity';
import { ComponentRepo } from 'src/model/repositories/component.repo';
import { IngredientsRepository } from 'src/model/repositories/ingredient.repository';
import { CreateComponentDto } from '../dto/component-dto';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectRepository(ComponentRepo) private componentRepo: ComponentRepo,
    @InjectRepository(IngredientsRepository)
    private ingredientsRepository: IngredientsRepository,
  ) {}

  async createComponent(
    createComponentDto: CreateComponentDto,
  ): Promise<Component> {
    const component = this.componentRepo.create({
      quantity: createComponentDto.quantity,
      ingredient: <any>{ id: createComponentDto.ingredientId },
    });

    return this.componentRepo.save(component);
  }

  getComponents(): Promise<Component[]> {
    return this.componentRepo.find({
      relations: ['ingredient'],
    });
  }
}