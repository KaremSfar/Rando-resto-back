import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { IngredientsModule } from './ingredients-gateway/ingredients.module';
import { ComponentsGatewayModule } from './components-gateway/components-gateway.module';
import { DishesGatewayModule } from './dishes-gateway/dishes-gateway.module';

//Config environment variables
dotenv.config();
//Typeorm Options
const typeOrmOpts: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmOpts),
    AuthModule,
    IngredientsModule,
    ComponentsGatewayModule,
    DishesGatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
