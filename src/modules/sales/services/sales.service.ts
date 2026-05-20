import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Sale } from '../entities/sales.entity';
import { CreateSaleDto } from '../dto/sales.dto';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sale)
        private readonly salesRepository: Repository<Sale>,
    ) {}

    async create(createSaleDto: CreateSaleDto): Promise<Sale> {
        const sale = this.salesRepository.create(createSaleDto);
        return this.salesRepository.save(sale);
    }

    async findAll(): Promise<Sale[]> {
        return this.salesRepository.find({
            withDeleted: true,      
            order: { created_at: 'DESC' },
        });
    }
    
    async findOne(id: number): Promise<Sale> {
    console.log('Buscando venta con ID:', id);

    const sale = await this.salesRepository.findOne({
            where: { 
            id: id,
            },
            withDeleted: true,
        });

        console.log('Resultado de la consulta:', sale);

        if (!sale) {
            throw new NotFoundException(`Venta con id ${id} no encontrada`);
        }

        return sale;
        }
    async update(id: number, updateSaleDto: CreateSaleDto): Promise<Sale> {
        const sale = await this.findOne(id);
        Object.assign(sale, updateSaleDto);
        return this.salesRepository.save(sale);
    }
    async remove(id: number): Promise<void> {
        const sale = await this.findOne(id);
        await this.salesRepository.remove(sale);
    }


}
