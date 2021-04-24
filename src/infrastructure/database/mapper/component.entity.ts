import { Component as IComponent } from 'src/domain/models/component';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DishEntity } from './dish.entity';
import { IngredientEntity } from './ingredient.entity';

@Entity('component')
export class Component extends IComponent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => IngredientEntity, (ingredient) => ingredient.components, {
    nullable: false,
  })
  ingredient: IngredientEntity;

  @Column('decimal', {
    precision: 5,
    scale: 2,
    nullable: false,
  })
  quantity: number;

  @ManyToOne(() => DishEntity, (dish) => dish.components)
  dish: DishEntity;
}
