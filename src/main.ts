import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useProxy } from '@/utils/proxy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'development') {
    useProxy();
  }
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(8100);
}
bootstrap();
