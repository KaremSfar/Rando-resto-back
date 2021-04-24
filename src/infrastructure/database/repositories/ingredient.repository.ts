import { EntityRepository, Repository } from 'typeorm';
import { IngredientEntity } from '../mapper/ingredient.entity';

@EntityRepository(IngredientEntity)
export class IngredientsRepository extends Repository<IngredientEntity> {}
