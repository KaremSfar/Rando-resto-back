import { EntityRepository, Repository } from 'typeorm';
import { RestoOwnerEntity } from '../entities/resto-owner.entity';

@EntityRepository(RestoOwnerEntity)
export class RestoOwnerRepo extends Repository<RestoOwnerEntity> {}
