import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: "mysql",
            host: this.configService.get<string>("DB_HOST"),
            database: this.configService.get<string>("DB_NAME"),
            username: this.configService.get<string>("DB_USER"),
            password: this.configService.get<string>("DB_PASS"),
            synchronize: true, // DBの初回マイグレーションを許可
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
        }
    }
}
