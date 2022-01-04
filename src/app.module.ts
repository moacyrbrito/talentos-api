import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsModule } from './levels/levels.module';
import { DevelopersModule } from './developers/developers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./src/database/talentos.sqlite",
      entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    LevelsModule,
    DevelopersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
