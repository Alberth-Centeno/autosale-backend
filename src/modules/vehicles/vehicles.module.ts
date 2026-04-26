import { Module } from '@nestjs/common';
import { VehiclesController } from './controllers/vehicles.controller';
import { VehiclesService } from './services/vehicles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicles } from './entities/vehicles.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Vehicles])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports:[VehiclesService],
})
export class VehiclesModule {}
