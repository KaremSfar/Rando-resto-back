import { BaseEntity } from 'src/model/generic-entities/base.entity';

export class Ingredient extends BaseEntity {
  ingredientName: string;

  calories: number;
}
