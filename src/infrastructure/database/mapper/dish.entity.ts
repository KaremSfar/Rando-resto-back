import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Component } from './component.entity';
import { RestoOwnerEntity } from './resto-owner.entity';

@Entity('dish')
export class DishEntity extends BaseEntity {
  @ManyToOne(() => RestoOwnerEntity, (resto) => resto.dishes)
  resto: RestoOwnerEntity;

  @Column({ nullable: false })
  dishName: string;

  @OneToMany(() => Component, (component) => component.dish)
  components: Component[];
}
