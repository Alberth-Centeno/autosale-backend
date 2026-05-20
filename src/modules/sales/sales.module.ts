import { Module } from '@nestjs/common';
import { SalesController } from './controllers/sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sales.entity';
import { SalesService } from './services/sales.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SalesService, SalesService],
  exports:[SalesService],
})
export class SalesModule {}
