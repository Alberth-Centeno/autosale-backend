import { Get, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/vehicle.dto';

@Injectable()
export class VehiclesService {
    constructor() {}

    create(CreateVehicleDto: CreateVehicleDto){
    return CreateVehicleDto;
    }

}
