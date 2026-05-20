import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Costumer } from '../entities/costumers.entity';
import { CreateCostumerDto } from '../dto/costumers.dto';

@Injectable()
export class CostumersService {
    constructor(
        @InjectRepository(Costumer)
        private readonly costumersRepository: Repository<Costumer>,
    ) {}

    async create(createCostumerDto: CreateCostumerDto): Promise<Costumer> {
        const costumer = this.costumersRepository.create(createCostumerDto);
        return this.costumersRepository.save(costumer);
    } 
    async findAll(): Promise<Costumer[]> {
            return this.costumersRepository.find({
                withDeleted: true,      
                order: { created_at: 'DESC' },
            });
        }
        
    async findOne(id: number): Promise<Costumer> {
        console.log('Buscando cliente con ID:', id);
    
        const costumer = await this.costumersRepository.findOne({
                where: { 
                id: id,
                },
                withDeleted: true,
            });
    
            console.log('Resultado de la consulta:', costumer);
    
            if (!costumer) {
                throw new NotFoundException(`Cliente con id ${id} no encontrado`);
            }
    
            return costumer;
            }
    async update(id: number, updateCostumerDto: CreateCostumerDto): Promise<Costumer> {
            const costumer = await this.findOne(id);
            Object.assign(costumer, updateCostumerDto);
            return this.costumersRepository.save(costumer);
        }
    async remove(id: number): Promise<void> {
            const costumer = await this.findOne(id);
            await this.costumersRepository.remove(costumer);
        }
}
