import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from '../dto/brand.dto';
import { Brand } from '../entities/brand.entity';
import { UpdateBrandDto } from '../dto/brand.dto';

@Injectable()
export class BrandsService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,
    ) {}

    async create(createBrandDto: CreateBrandDto) : Promise<Brand> {
        const brand = this.brandRepository.create(createBrandDto);
        return this.brandRepository.save(brand);
    }

    async findAll(): Promise<Brand[]> {
        return this.brandRepository.find();
    }

    async findOne(id: number): Promise<Brand> {
        const brand = await this.brandRepository.findOneBy({ id });
        if (!brand) {
            throw new Error(`Brand with id ${id} not found`);
        }
        return brand;
    }
    
    async update(id: number, updateBrandDto: UpdateBrandDto): Promise<Brand> {
        const brand = await this.findOne(id);
        Object.assign(brand, updateBrandDto);
        return this.brandRepository.save(brand);
    }

    async remove(id: number): Promise<void> {
        const brand = await this.findOne(id);
        await this.brandRepository.remove(brand);
    }
}
