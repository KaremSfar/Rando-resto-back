import { BaseEntity } from '../shared/base.entity';
import { Ingredient } from './ingredient';

export interface Component extends BaseEntity {
  ingredient: Ingredient;

  quantity: number;
}
