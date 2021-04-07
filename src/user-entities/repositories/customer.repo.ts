import { EntityRepository, Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

@EntityRepository(CustomerEntity)
export class CustomerRepo extends Repository<CustomerEntity> {}
