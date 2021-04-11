import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IngredientCreateDto } from '../dtos/ingredient.dto';
import { IngredientEntity } from '../../model/entities/ingredient.entity';
import { IngredientService } from '../services/ingredient.service';

import { RolesGuard } from 'src/guards-module/guards/roles.guard';
import { Roles } from 'src/guards-module/decorators/roles.decorator';
import { Role } from 'src/model/util/role.enum';

@Controller('/ingredients')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  @Get()
  getIngredient(): Promise<IngredientEntity[]> {
    return this.ingredientService.getIgredients();
  }

  @UseGuards(RolesGuard)
  @Roles(Role.RestoOwner)
  @Post()
  createIngredient(
    @Body() ingredientCreateDto: IngredientCreateDto,
  ): Promise<IngredientEntity> {
    return this.ingredientService.createIngredient(ingredientCreateDto);
  }
}
