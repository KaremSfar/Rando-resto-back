import { CreateDishInputData } from 'src/application/input-data/dishes-data';

export class CreateDishDto implements CreateDishInputData {
  dishName: string;

  componentsIds: string[];

  // TODO: get rid of this and add mappers
  // Not gonna be used, only coz lazy
  // Interface segregation principle ... :')
  restoId: string;
}
