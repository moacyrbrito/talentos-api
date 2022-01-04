import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, Query, Res, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DevelopersService } from './developers.service';
import { DeveloperDto } from './dto/developer.dto';
import { Developer } from './entities/developer.entity';
import { Response } from 'express';

@Controller('desenvolvedor')
export class DevelopersController {

  constructor(private developersService: DevelopersService) {}

  @Post()
  async create(@Body() developerDto: DeveloperDto, @Res() response: Response): Promise<any> {
    try {
      let developer = this.novoObjetoDeveloper(developerDto);
      const errors = await validate(developer);
      if (errors.length > 0) {
        return response.status(HttpStatus.BAD_REQUEST).send(errors);
      }
      return response.status(HttpStatus.CREATED).json(await this.developersService.create(developer));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Get()
  async findAll(@Query('busca') busca, @Query('page') page = 1,  @Query('limit') limit = 100): Promise<Pagination<Developer>> {
    limit = limit > 100 ? 100 : limit;
    return await this.developersService.findAll({page, limit}, busca);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      let developer = await this.developersService.findOne(+id);
      if(developer){
        return response.status(HttpStatus.OK).json(developer);
      }
      return response.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() developer: DeveloperDto, @Res() response: Response) {
    try {
      return response.status(HttpStatus.OK).json(this.developersService.update(Number(id), this.novoObjetoDeveloper(developer)));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Put()
  async put(@Body() developer: Developer, @Res() response: Response){
    try{
      let dev = this.novoObjetoDeveloper(developer);
      dev.id = developer.id;
      return response.status(HttpStatus.OK).json(this.developersService.put(dev));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string, @Res() response: Response) {
    try {
      return response.status(HttpStatus.NO_CONTENT).send(this.developersService.remove(Number(id)));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  novoObjetoDeveloper(developerDto: DeveloperDto){
    let developer = new Developer();
    developer.hobby = developerDto.hobby;
    developer.datanascimento = developerDto.datanascimento;
    developer.nivel =developerDto.nivel;
    developer.nome = developerDto.nome;
    developer.sexo = developerDto.sexo;
    return developer;
  }

}
