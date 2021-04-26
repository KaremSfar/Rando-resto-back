import { IsNotEmpty } from 'class-validator';
import { CreateComponentInputData } from 'src/application/input-data/component-data';

export class CreateComponentDto extends CreateComponentInputData {
  @IsNotEmpty()
  ingredientId: string;

  @IsNotEmpty()
  quantity: number;
}
