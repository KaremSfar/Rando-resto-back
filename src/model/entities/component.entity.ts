import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../generic-entities/base.entity';
import { IngredientEntity } from './ingredient.entity';

@Entity('component')
export class Component extends BaseEntity {
  @ManyToOne(() => IngredientEntity, (ingredient) => ingredient.components, {
    nullable: false,
  })
  ingredient: IngredientEntity;

  @Column({
    nullable: false,
  })
  quantity: number;
}
