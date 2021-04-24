import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from 'src/domain/models/role.enum';
import { User } from 'src/guards-module/decorators/get.user.decorator';
import { Roles } from 'src/guards-module/decorators/roles.decorator';
import { RolesGuard } from 'src/guards-module/guards/roles.guard';
import { RestoOwnerEntity } from 'src/infrastructure/database/mapper/resto-owner.entity';
import { CreateDishDto } from '../dto/dishes.dto';
import { DishesService } from './dishes.service';

@UseGuards(RolesGuard)
@Roles(Role.RestoOwner)
@Controller('dishes/resto')
export class DishesRestoController {
  constructor(private dishesService: DishesService) {}

  @Get()
  getDishes() {
    return this.dishesService.getDishes();
  }

  @Post()
  createDish(
    @Body() createDishDto: CreateDishDto,
    @User() restoOwner: RestoOwnerEntity,
  ) {
    return this.dishesService.createDish(createDishDto, restoOwner);
  }
}
