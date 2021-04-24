import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepo } from 'src/infrastructure/database/repositories/customer.repo';
import { RestoOwnerRepo } from 'src/infrastructure/database/repositories/resto-owner.repo';

@Module({
  imports: [TypeOrmModule.forFeature([RestoOwnerRepo, CustomerRepo])],
  providers: [],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
