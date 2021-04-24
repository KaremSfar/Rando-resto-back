import { EntityRepository, Repository } from 'typeorm';
import { Component } from '../mapper/component.entity';

@EntityRepository(Component)
export class ComponentRepo extends Repository<Component> {}
