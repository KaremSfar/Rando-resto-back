import { Ingredient } from 'src/domain/models/ingredient';

export interface IngredientRepository {
  find(): Ingredient[];

  createIngredient(Ingredient): Ingredient;
}
