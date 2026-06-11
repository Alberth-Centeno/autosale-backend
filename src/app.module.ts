import { Module } from '@nestjs/common';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesModule } from './modules/sales/sales.module';
import { CostumersModule } from './modules/costumers/costumers.module';
import { AuthModule } from './modules/auth/auth.modules';
import { BrandsModule } from './modules/brands/brands.module';
import { ModelsModule } from './modules/models/models.module';

@Module({
  imports: [VehiclesModule,ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SalesModule,
    CostumersModule,
    AuthModule,
    BrandsModule,
    CostumersModule,
    ModelsModule
  ],
})
export class AppModule {}
