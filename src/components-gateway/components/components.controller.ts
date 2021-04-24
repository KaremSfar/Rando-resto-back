import { Body, Controller, Get, Post } from '@nestjs/common';
import { Component } from 'src/infrastructure/database/mapper/component.entity';
import { CreateComponentDto } from '../dto/component-dto';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
  constructor(private componentsService: ComponentsService) {}

  @Get()
  getComponent(): Promise<Component[]> {
    return this.componentsService.getComponents();
  }

  @Post()
  createComponent(@Body() createComponentDto: CreateComponentDto) {
    return this.componentsService.createComponent(createComponentDto);
  }
}
