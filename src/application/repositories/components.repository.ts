import { Component } from 'src/domain/models/component';

export interface ComponentsRepository {
  createComponent(component: Component): Promise<Component>;
}
