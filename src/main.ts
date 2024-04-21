import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dynamicImport } from './core/contants';

async function bootstrap() {
  const appOptions = {
    cors: true,
  };
  const app = await NestFactory.create(AppModule, appOptions);
  const adminJSModule = await dynamicImport('adminjs');
  const AdminJS = adminJSModule.default;

  const AdminJSSequelize = await dynamicImport('@adminjs/sequelize');

  AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database, // Change with whatever adapter you want to use
  });
  //global prefix
  app.setGlobalPrefix('api/v1');
  await app.listen(3002);
}
bootstrap();
