import { BaseEntity } from '../shared/base.entity';

export interface Ingredient extends BaseEntity {
  ingredientName: string;

  calories: number;
}
