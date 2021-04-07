import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user-entities/generic-entities/user.entity';
import { CustomerRepo } from 'src/user-entities/repositories/customer.repo';
import { RestoOwnerRepo } from 'src/user-entities/repositories/resto-owner.repo';
import { Role } from 'src/user-entities/util/role.enum';
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
