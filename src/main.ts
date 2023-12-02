import { NestFactory } from '@nestjs/core';
import { appModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(appModule);
  console.log("app module")
  await app.listen(3000);
}
bootstrap();
