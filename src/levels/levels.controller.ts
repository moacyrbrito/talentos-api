import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { Pagination } from 'nestjs-typeorm-paginate';
import { LevelDto } from './dto/level.dto';
import { Level } from './entities/level.entity';
import { LevelsService } from './levels.service';
import { Response } from 'express';

@Controller('nivel')
export class LevelsController {

  constructor(private levelsService: LevelsService) {}

  @Post()
  async create(@Body() levelDto: LevelDto, @Res() response: Response): Promise<any> {
    try {
      let level = this.novoObjetoLevel(levelDto);
      const errors = await validate(level);
      if (errors.length > 0) {
        return response.status(HttpStatus.BAD_REQUEST).send(errors);
      }
      return response.status(HttpStatus.CREATED).json(await this.levelsService.create(level));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Get()
  async findAll(@Query('busca') busca, @Query('page') page = 1,  @Query('limit') limit = 100): Promise<Pagination<Level>> {
    limit = limit > 100 ? 100 : limit;
    return await this.levelsService.findAll({page, limit}, busca);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      let level = await this.levelsService.findOne(+id);
      if(level){
        return response.status(HttpStatus.OK).json(level);
      }
      return response.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() level: LevelDto, @Res() response: Response) {
    try {
      return response.status(HttpStatus.OK).json(this.levelsService.update(Number(id), this.novoObjetoLevel(level)));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }


  @Put()
  async put(@Body() level: Level, @Res() response: Response){
    try{
      let dev = this.novoObjetoLevel(level);
      dev.id = level.id;
      return response.status(HttpStatus.OK).json(this.levelsService.put(dev));
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    try {
      await this.levelsService.remove(Number(id));
      return response.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      console.log(error);
      return response.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  novoObjetoLevel(levelDto: LevelDto){
    let level = new Level();
    level.nivel =levelDto.nivel;
    return level;
  }

}
