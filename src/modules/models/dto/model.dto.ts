import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";

export class CreateVehicleModelDto {
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    brandId: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({example: 'corrolla'})
    name:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({example: 'sedan'})
    type:string;
}

export class UpdateVehicleModelDto extends PartialType(CreateVehicleModelDto) {} 
