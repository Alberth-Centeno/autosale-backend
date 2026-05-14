import { Injectable } from '@nestjs/common';
import { VehicleModel } from '../entities/vehicle-model.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleModelDto } from '../dto/model.dto';

@Injectable()
export class ModelsService {
    constructor(
        @InjectRepository(VehicleModel)
        private readonly vehicleModelRepository: Repository<VehicleModel>,
    ) {}

    async create(
        createVehicleModelDto: CreateVehicleModelDto,
    ): Promise<VehicleModel> {
        const model = this.vehicleModelRepository.create(createVehicleModelDto);
        return await this.vehicleModelRepository.save(model);
    }
}
