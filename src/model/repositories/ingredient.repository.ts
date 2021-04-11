import { EntityRepository, Repository } from 'typeorm';
import { IngredientEntity } from '../entities/ingredient.entity';

@EntityRepository(IngredientEntity)
export class IngredientsRepository extends Repository<IngredientEntity> {}
