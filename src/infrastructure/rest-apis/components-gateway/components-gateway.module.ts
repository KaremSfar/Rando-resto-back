import { Module } from '@nestjs/common';
import { ComponentsRepository } from 'src/application/repositories/components.repository';
import { ComponentsInteractor } from 'src/application/use-cases/components-interactor';
import { EntitiesModule } from 'src/infrastructure/database/entities.module';
import { ComponentRepo } from 'src/infrastructure/database/repositories/component.repo';
import { ComponentsController } from './components/components.controller';
import { ComponentsService } from './components/components.service';

@Module({
  imports: [EntitiesModule],
  controllers: [ComponentsController],
  providers: [
    ComponentsService,
    //ComponentsInteractor,
    //{ provide: ComponentsRepository, useClass: ComponentRepo },
  ],
})
export class ComponentsGatewayModule {}
