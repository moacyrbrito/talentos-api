import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { LevelDto } from './dto/level.dto';
import { Level } from './entities/level.entity';

@Injectable()
export class LevelsService {

  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>){

  }
  async create(level: LevelDto): Promise<Level> {
    console.log(level);
    return await this.levelRepository.save(level);
  }

  async findAll(options: IPaginationOptions, busca = null): Promise<Pagination<Level>> {
    const queryBuilder = this.levelRepository.createQueryBuilder('l');
    queryBuilder.orderBy('l.id', 'ASC');
    if(busca){
      queryBuilder.where("l.nivel like :busca", {busca: '%' + busca + '%'}).getMany();
    }
    return paginate<Level>(queryBuilder,options);
  }

  async findOne(id: number) {
    return await this.levelRepository.findOne(id);
  }

  async update(id: number, level: LevelDto): Promise<any> {
    return await this.levelRepository.update(id, level).then(() => {
      return level;
    });
  }

  async put(level: Level){
    return await this.levelRepository.save(level);
  }

  async remove(id: number) {
    return await this.levelRepository.delete(id);
  }
}