import { EntityRepository, Repository } from 'typeorm';
import { DishEntity } from '../mapper/dish.entity';

@EntityRepository(DishEntity)
export class DishRepo extends Repository<DishEntity> {}
