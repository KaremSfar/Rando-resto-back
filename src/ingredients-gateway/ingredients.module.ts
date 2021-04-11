import { Module } from '@nestjs/common';
import { IngredientController } from './controllers/ingredient.controller';
import { IngredientService } from './services/ingredient.service';
import { EntitiesModule } from 'src/model/entities.module';

@Module({
  imports: [EntitiesModule],
  providers: [IngredientService],
  controllers: [IngredientController],
  exports: [],
})
export class IngredientsModule {}
