import { EntityRepository, Repository } from 'typeorm';
import { RestoOwnerEntity } from '../mapper/resto-owner.entity';

@EntityRepository(RestoOwnerEntity)
export class RestoOwnerRepo extends Repository<RestoOwnerEntity> {}
