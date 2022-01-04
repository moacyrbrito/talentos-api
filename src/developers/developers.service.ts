import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { DeveloperDto } from './dto/developer.dto';
import { Developer } from './entities/developer.entity';

@Injectable()
export class DevelopersService {
  
  constructor(
    @InjectRepository(Developer)
    private levelRepository: Repository<Developer>){

  }
  async create(level: DeveloperDto): Promise<Developer> {
    return await this.levelRepository.save(level);
  }

  async findAll(options: IPaginationOptions, busca = null): Promise<Pagination<Developer>> {
    const queryBuilder = this.levelRepository.createQueryBuilder('d');
    queryBuilder.orderBy('d.id', 'ASC');
    if(busca){
      queryBuilder.where("d.nome like :busca", {busca: '%' + busca + '%'}).getMany();
    }
    return paginate<Developer>(queryBuilder,options);
  }

  async findOne(id: number) {
    return await this.levelRepository.findOne(id);
  }

  async update(id: number, level: DeveloperDto): Promise<any> {
    return await this.levelRepository.update(id, level).then(() => {
      return level;
    });
  }

  async put(level: Developer){
    return await this.levelRepository.save(level);
  }

  async remove(id: number) {
    return await this.levelRepository.delete(id);
  }
}
