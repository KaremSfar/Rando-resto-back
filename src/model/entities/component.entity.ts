import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../generic-entities/base.entity';
import { DishEntity } from './dish.entity';
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

  @ManyToOne(() => DishEntity, (dish) => dish.components)
  dish: DishEntity;
}
