import { Body, Controller, Post } from '@nestjs/common';
import { ComponentsInteractor } from 'src/application/use-cases/components-interactor';
import { CreateComponentDto } from '../dto/component-dto';

@Controller('components')
export class ComponentsController {
  constructor(private componentInteractor: ComponentsInteractor) {}

  @Post()
  createComponent(@Body() createComponentDto: CreateComponentDto) {
    return this.componentInteractor.createComponent(createComponentDto);
  }
}
