import { IsNotEmpty } from 'class-validator';

export class CreateComponentDto {
  @IsNotEmpty()
  ingredientId: string;

  @IsNotEmpty()
  quantity: number;
}
