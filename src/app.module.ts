import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';

import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { LogsMiddleware, QueryMiddleware } from './core/middlewares';
import { APP_FILTER, RouterModule } from '@nestjs/core';
import { ApiRoute, allModule } from './router';
import { AuthModule } from './auth/auth.module';
import { AllExceptionsFilter } from './core/filter/all-exception.filter';
import { WorkoutModule } from './workout/workout.module';
import { ExceriseModule } from './excerise/excerise.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // RouterModule.register(ApiRoute),
    ...allModule,
    AuthModule,
    WorkoutModule,
    ExceriseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(QueryMiddleware, LogsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
