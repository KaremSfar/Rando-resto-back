import { BaseEntity } from '../shared/base.entity';
import { DishEntity } from './dish';
import { IngredientEntity } from './ingredient';

export class Component extends BaseEntity {
  ingredient: IngredientEntity;

  quantity: number;

  dish: DishEntity;
}
