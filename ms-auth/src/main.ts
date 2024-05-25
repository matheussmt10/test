import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { setup } from 'mongoose-zod';
import { z as myZ } from 'zod';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

setup({ z: myZ });
setup({ z: null });
setup();
const server = express();
export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { cors: true },
  );
  const config = new DocumentBuilder()
    .setTitle('Shelters API')
    .setDescription('Shelters details')
    .setVersion('1.0')
    .addTag('shelters')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors();
  app.listen(4000);
  return app.init();
};
createNestServer(server)
  .then()
  .catch((err) => console.error('Nest broken', err));

module.exports.httpHandler = server;
