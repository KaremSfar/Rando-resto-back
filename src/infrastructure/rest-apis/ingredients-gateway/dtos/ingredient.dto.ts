import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { CreateIngredientInputData } from 'src/application/input-data/ingredient.data';

export class IngredientCreateDto extends CreateIngredientInputData {
  @IsNotEmpty()
  ingredientName: string;

  @IsNotEmpty()
  calories: number;
}
