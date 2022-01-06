import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000
  app.enableCors({
    allowedHeaders:"*",
    origin: "*"
  });
  const config = new DocumentBuilder()
    .setTitle('Talentos APi')
    .setVersion('1.0')
    .addTag('talentos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(port);
  console.info(`server up in port ${port}`)
}
bootstrap();
