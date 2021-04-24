import { Inject, Injectable } from '@nestjs/common';
import { Component } from 'src/domain/models/component';
import { CreateComponentDataMapper } from '../data-model-mappers/component-mappers';
import { CreateComponentInputData } from '../input-data/component-dto';
import { ComponentsRepository } from '../repositories/components.repository';

@Injectable()
export class ComponentsInteractor {
  constructor(
    @Inject('ComponentsRepository')
    private componentRepository: ComponentsRepository,
  ) {}

  async createComponent(
    createComponent: CreateComponentInputData,
  ): Promise<Component> {
    const component = CreateComponentDataMapper.toClass(createComponent);
    return await this.componentRepository.createComponent(component);
  }
}
