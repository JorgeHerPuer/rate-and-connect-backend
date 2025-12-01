import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/config'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // we import it in all modules
    envFilePath: ['.env.dev', '.env.prod'], // load env files
    load: [configuration]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
