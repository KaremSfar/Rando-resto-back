import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/domain/models/ingredient';
import { IIngredientRepository } from '../repositories/IIngredientRepository';

@Injectable()
export class IngredientsInteractor {
  constructor(private ingredientsRepository: IIngredientRepository) {}

  getIgredients(): Ingredient[] {
    return this.ingredientsRepository.find();
  }

  createIngredient(ingredient: Ingredient): Ingredient {
    return this.ingredientsRepository.createIngredient(ingredient);
  }
}
