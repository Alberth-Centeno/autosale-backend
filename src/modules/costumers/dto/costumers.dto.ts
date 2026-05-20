import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString, MinLength, IsNotEmpty } from "class-validator";

export class CreateCostumerDto {
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    @ApiProperty()
    phone: string;
}

export class UpdateCostumerDto extends PartialType(CreateCostumerDto) {}