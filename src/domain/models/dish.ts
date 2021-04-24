import { BaseEntity } from '../shared/base.entity';
import { Component } from './component';
import { RestoOwnerEntity } from './resto-owner';

export class DishEntity extends BaseEntity {
  resto: RestoOwnerEntity;

  dishName: string;

  components: Component[];
}
