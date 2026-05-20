import { Module } from '@nestjs/common';
import { CostumersService } from './services/costumers.service';
import { CostumersController } from './controllers/costumers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Costumer } from './entities/costumers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Costumer])],
  controllers: [CostumersController],
  providers: [CostumersService],
  exports:[CostumersService],
})
export class CostumersModule {}
