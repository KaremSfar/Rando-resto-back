import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/domain/models/ingredient';
import { IngredientRepository } from '../repositories/ingredient.repository';

@Injectable()
export class IngredientsInteractor {
  constructor(private ingredientsRepository: IngredientRepository) {}

  getIgredients(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }

  createIngredient(ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientsRepository.createIngredient(ingredient);
  }
}
