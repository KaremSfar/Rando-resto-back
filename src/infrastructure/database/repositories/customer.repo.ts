import { EntityRepository, Repository } from 'typeorm';
import { CustomerEntity } from '../mapper/customer.entity';

@EntityRepository(CustomerEntity)
export class CustomerRepo extends Repository<CustomerEntity> {}
