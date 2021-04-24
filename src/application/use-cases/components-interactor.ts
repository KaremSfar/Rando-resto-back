import { Injectable } from '@nestjs/common';
import { Component } from 'src/domain/models/component';
import { ComponentsRepository } from '../repositories/components.repository';

@Injectable()
export class ComponentsInteractor {
  constructor(private componentRepository: ComponentsRepository) {}

  createComponent(component: Component): Component {
    return this.componentRepository.createComponent(component);
  }
}
