import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateTransactionInputData } from 'src/application/input-data/transaction-data';

export class CreateTransactionDto extends CreateTransactionInputData {
  @IsNotEmpty()
  @ApiProperty()
  customerId: string;

  @IsNotEmpty()
  @ApiProperty()
  dishId: string;
}
