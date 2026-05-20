import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SalesService } from '../services/sales.service';
import { CreateSaleDto } from '../dto/sales.dto';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
    constructor(
        private readonly salesService: SalesService
    ) {}

    @Post()
    create(@Body() createSaleDto: CreateSaleDto) {
       return this.salesService.create(createSaleDto);
    }

    @Get()
    findAll() {
        return this.salesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.salesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateSaleDto: CreateSaleDto) {
        return this.salesService.update(id, updateSaleDto);
    }
    
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.salesService.remove(id);
    }
}

