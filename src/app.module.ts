import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MediaModule } from './media/media.module';
import configuration from './config/config';

@Module({
  imports: [
    // define module configurations with forRoot
    ConfigModule.forRoot({
      isGlobal: true, // we import it in all modules
      envFilePath: ['.env.dev', '.env.prod'], // load env files
      load: [configuration], // make database data accesible via ConfigService
    }),
    UserModule,
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
