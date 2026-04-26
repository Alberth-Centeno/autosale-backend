import { applyIsOptionalDecorator } from "@nestjs/mapped-types";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateVehicleDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty()
    id?: number;

    @IsNumber()
    @ApiProperty()
    model_id?:number;

    @IsString()
    @MinLength(3)
    @ApiProperty()
    @IsInt()
    vin?:string;

    @ApiProperty()
    @IsOptional()
    @IsPositive()
    year:number;

    @ApiProperty()
    @IsString()
    @MinLength(3)
    color:string;

    @IsOptional()
    @IsInt()    
    @ApiProperty()
    @IsPositive()
    mileage:number;

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    @IsPositive()
    price:number;

    @ApiProperty()
    @IsString()
    @MinLength(3)
    status:string;

}
export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}