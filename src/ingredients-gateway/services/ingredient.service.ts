import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientEntity } from 'src/infrastructure/database/mapper/ingredient.entity';
import { IngredientsRepository } from 'src/infrastructure/database/repositories/ingredient.repository';
import { IngredientCreateDto } from '../dtos/ingredient.dto';

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
