import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000
  app.enableCors({
    allowedHeaders:"*",
    origin: "*"
  });
  await app.listen(port);
  console.info(`server up in port ${port}`)
}
bootstrap();
