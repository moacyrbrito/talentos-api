import { ApiProperty } from "@nestjs/swagger";
import { Level } from "src/levels/entities/level.entity";

export class DeveloperDto {
    @ApiProperty()
    nivel: Level;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    sexo: string;

    @ApiProperty()
    datanascimento: string;

    @ApiProperty()
    hobby: string;
}
