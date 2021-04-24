import { BaseEntity } from '../shared/base.entity';
import { Ingredient } from './ingredient';

export class Component extends BaseEntity {
  ingredient: Ingredient;

  quantity: number;
}
