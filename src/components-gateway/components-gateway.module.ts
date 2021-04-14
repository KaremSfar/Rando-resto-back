import { Module } from '@nestjs/common';
import { EntitiesModule } from 'src/model/entities.module';
import { ComponentsController } from './components/components.controller';
import { ComponentsService } from './components/components.service';

@Module({
  imports: [EntitiesModule],
  controllers: [ComponentsController],
  providers: [ComponentsService],
})
export class ComponentsGatewayModule {}
