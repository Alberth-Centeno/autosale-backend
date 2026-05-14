import { Body, Controller, Post } from '@nestjs/common';
import { CreateVehicleModelDto } from '../dto/model.dto';
import { ModelsService } from '../services/models.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Models')
@Controller('models')
export class ModelsController {
    constructor(private readonly modelsService: ModelsService) {}

    @Post()
    create(@Body() createVehicleModelDto: CreateVehicleModelDto) {
        return this.modelsService.create(createVehicleModelDto);
    }
}
