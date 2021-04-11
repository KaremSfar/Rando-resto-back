import { BaseEntity } from 'src/model/generic-entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Component } from './component.entity';

@Entity('ingredient')
export class IngredientEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  ingredientName: string;

  @Column()
  calories: number;

  @OneToMany(() => Component, (component) => component.ingredient)
  components: Component[];
}
