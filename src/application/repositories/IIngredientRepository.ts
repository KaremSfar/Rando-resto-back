import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/domain/models/ingredient';

@Injectable()
export abstract class IIngredientRepository {
  abstract find(): Ingredient[];

  abstract createIngredient(Ingredient): Ingredient;
}
