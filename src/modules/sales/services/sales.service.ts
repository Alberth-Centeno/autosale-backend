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
            withDeleted: true,           // ← Muestra todos los registros
            order: { created_at: 'DESC' },
            // relations: ['customer', 'vehicle'] // descomenta si las necesitas
        });
    }
    
    async findOne(id: number): Promise<Sale> {
    console.log('Buscando venta con ID:', id);

    const sale = await this.salesRepository.findOne({
            where: { 
            id: id,
            // deleted_at: IsNull()   // ← Comenta o quita esta línea si quieres ver registros eliminados
            },
            withDeleted: true,           // ← Esta es la clave
        });

        console.log('Resultado de la consulta:', sale);

        if (!sale) {
            throw new NotFoundException(`Venta con id ${id} no encontrada`);
        }

        return sale;
        }

    async remove(id: number): Promise<void> {
        const sale = await this.findOne(id);
        await this.salesRepository.remove(sale);
    }


}
