import { Body, Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import { VehiclesService } from '../services/vehicles.service';

@Controller('vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService){}
    @Get()
    getVehiclesAll(){
        return 'lista de vehiculos'
    }

    @Post()
    CreateVehicles(@Body()createVehicleDto: CreateVehicleDto){
        return this.vehiclesService.create(createVehicleDto);
}
}
