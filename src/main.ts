// Imports:
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // It will remove properties that do not have any decorators in the DTOs.
      // forbidNonWhitelisted: true, // It will throw an error if non-whitelisted properties are present.
      // transform: true, // It will automatically transform payloads to be objects typed according to their DTO classes.
    }),
  ); // Enable global validation pipe for DTOs so that incoming requests are validated.
  app.setGlobalPrefix('api/v1'); // Set a global prefix for all routes.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
