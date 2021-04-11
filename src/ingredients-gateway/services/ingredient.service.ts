import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientCreateDto } from '../dtos/ingredient.dto';
import { IngredientEntity } from '../../model/entities/ingredient.entity';
import { IngredientsRepository } from '../../model/repositories/ingredient.repository';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(IngredientsRepository)
    private ingredientsRepository: IngredientsRepository,
  ) {}

  getIgredients(): Promise<IngredientEntity[]> {
    return this.ingredientsRepository.find();
  }

  createIngredient(
    ingredientCreateDto: IngredientCreateDto,
  ): Promise<IngredientEntity> {
    const ingredient = this.ingredientsRepository.create({
      ...ingredientCreateDto,
    });
    return this.ingredientsRepository.save(ingredient);
  }
}
