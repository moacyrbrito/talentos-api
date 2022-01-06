import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty} from "class-validator";
import { Level } from "src/levels/entities/level.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Developer {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @ManyToOne(() => Level, nivel => nivel.id)
    @IsNotEmpty({ message: "Nível obrigatório!"})
    @ApiProperty()
    nivel: Level

    @Column()
    @IsNotEmpty({ message: "Campo nome é obrigatório!"})
    @ApiProperty()
    nome: string;

    @Column()
    @IsNotEmpty({ message: "Campo sexo é obrigatório!"})
    @ApiProperty()
    sexo: string;

    @Column()
    @IsNotEmpty({ message: "Campo datanascimento é obrigatório!"})
    @ApiProperty()
    datanascimento: string;

//TODO não faz sentido ter idade se já tem data de nascimento
    // @Column()
    // idade: number;

    @Column()
    @IsNotEmpty({ message: "Campo hobby é obrigatório!"})
    @ApiProperty()
    hobby: string;


}
