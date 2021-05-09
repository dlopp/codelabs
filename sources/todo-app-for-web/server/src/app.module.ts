import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmConfigService } from "./config/typeorm-config.service";

@Module({
  imports: [
    TodolistModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
