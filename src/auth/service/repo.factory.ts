import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/domain/models/role.enum';
import { UserEntity } from 'src/infrastructure/database/mapper/user.entity';
import { CustomerRepo } from 'src/infrastructure/database/repositories/customer.repo';
import { RestoOwnerRepo } from 'src/infrastructure/database/repositories/resto-owner.repo';
import { Repository } from 'typeorm';

// Repository Factory for authenticating
@Injectable()
export class RepositoryFactory {
  constructor(
    @InjectRepository(CustomerRepo) private customerRepo: CustomerRepo,
    @InjectRepository(RestoOwnerRepo) private restoOwnerRepo: RestoOwnerRepo,
  ) {}
  // Returns the Right repository depending on the user entity' Role
  getRepository(role: Role): Repository<UserEntity> {
    if (role === Role.Customer) return this.customerRepo;
    if (role === Role.RestoOwner) return this.restoOwnerRepo;
  }
}
