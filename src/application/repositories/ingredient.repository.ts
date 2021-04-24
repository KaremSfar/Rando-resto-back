import { Ingredient } from 'src/domain/models/ingredient';

export interface IngredientRepository {
  find(): Promise<Ingredient[]>;

  createIngredient(Ingredient): Promise<Ingredient>;
}
