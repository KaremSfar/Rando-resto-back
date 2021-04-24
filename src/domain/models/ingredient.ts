import { BaseEntity } from 'src/model/generic-entities/base.entity';

export interface Ingredient extends BaseEntity {
  ingredientName: string;

  calories: number;
}
