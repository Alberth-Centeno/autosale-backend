import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCostumerDto } from '../dto/costumers.dto';
import { CostumersService } from '../services/costumers.service';

@Controller('costumers')
export class CostumersController {
    constructor(
        private readonly costumersService: CostumersService
    ) {}

    @Post()
    create(@Body() createCostumerDto: CreateCostumerDto) {
       return this.costumersService.create(createCostumerDto);
    }

    @Get()
    findAll() {
        return this.costumersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.costumersService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateCostumerDto: CreateCostumerDto) {
        return this.costumersService.update(id, updateCostumerDto);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.costumersService.remove(id);
    }}
