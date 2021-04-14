import { EntityRepository, Repository } from 'typeorm';
import { DishEntity } from '../entities/dish.entity';

@EntityRepository(DishEntity)
export class DishRepo extends Repository<DishEntity> {}
