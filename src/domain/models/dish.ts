import { BaseEntity } from '../shared/base.entity';
import { Component } from './component';
import { RestoOwner } from './resto-owner';

export class Dish extends BaseEntity {
  resto: RestoOwner;

  dishName: string;

  components: Component[];
}
