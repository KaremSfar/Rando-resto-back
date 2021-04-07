import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepo } from './repositories/customer.repo';
import { RestoOwnerRepo } from './repositories/resto-owner.repo';

@Module({
  imports: [TypeOrmModule.forFeature([RestoOwnerRepo, CustomerRepo])],
  providers: [],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
