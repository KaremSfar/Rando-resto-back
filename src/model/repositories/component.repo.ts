import { EntityRepository, Repository } from 'typeorm';
import { Component } from '../entities/component.entity';

@EntityRepository(Component)
export class ComponentRepo extends Repository<Component> {}
