import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [ProductsModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
