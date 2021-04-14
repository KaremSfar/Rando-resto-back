import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/guards-module/decorators/get.user.decorator';
import { Roles } from 'src/guards-module/decorators/roles.decorator';
import { RolesGuard } from 'src/guards-module/guards/roles.guard';
import { RestoOwnerEntity } from 'src/model/entities/resto-owner.entity';
import { Role } from 'src/model/util/role.enum';
import { CreateDishDto } from '../dto/dishes.dto';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {}

  @Get()
  getDishes(){
    return this.dishesService.getDishes();
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles(Role.RestoOwner)
  createDish(
    @Body() createDishDto: CreateDishDto,
    @User() restoOwner: RestoOwnerEntity,
  ) {
    return this.dishesService.createDish(createDishDto, restoOwner);
  }
}
