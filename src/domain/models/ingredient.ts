import { BaseEntity } from 'src/model/generic-entities/base.entity';
import { Component } from './component';

export class IngredientEntity extends BaseEntity {
  ingredientName: string;

  calories: number;

  components: Component[];
}
