import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class IngredientCreateDto {
  @IsNotEmpty()
  ingredientName: string;

  @IsNotEmpty()
  calories: number;
}
