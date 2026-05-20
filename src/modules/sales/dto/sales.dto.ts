import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";

export class CreateSaleDto{
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    vehicle_id: number;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    customer_id: number;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    total: number;
}

export class UpdateSaleDto extends PartialType(CreateSaleDto) {}