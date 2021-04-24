import { Body, Controller, Get, Post } from '@nestjs/common';
import { ComponentsInteractor } from 'src/application/use-cases/components-interactor';
import { CreateComponentDto } from '../dto/component-dto';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
  constructor(private componentInteractor: ComponentsService) {}

  @Post()
  createComponent(@Body() createComponentDto: CreateComponentDto) {
    return this.componentInteractor.createComponent(createComponentDto);
  }
}
