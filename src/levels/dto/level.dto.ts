import { ApiProperty } from "@nestjs/swagger";

export class LevelDto {
    @ApiProperty()
    nivel: string;
}