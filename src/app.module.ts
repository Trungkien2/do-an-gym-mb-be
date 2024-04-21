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
import { dynamicImport } from './core/contants';
import { User } from './user/user.entity';
import { Workout } from './workout/workout.entity';
import { Excerise } from './excerise/entities/excerise.entity';
import { MealModule } from './meal/meal.module';
import { MealPlannerModule } from './meal_planner/meal_planner.module';
const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};
@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // RouterModule.register(ApiRoute),
    ...allModule,
    AuthModule,
    WorkoutModule,
    ExceriseModule,
    dynamicImport('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [
              {
                resource: User,
                listProperties: ['id', 'name', 'createdAt'],
              },
              Workout,
              Excerise,
            ],
          },
          auth: {
            authenticate,
            cookieName: 'adminjs',
            cookiePassword: 'secret',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: 'secret',
          },
        }),
      }),
    ),
    MealModule,
    MealPlannerModule,
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
