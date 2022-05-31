import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@share/modules/prisma/prisma.module';

import { ImportController } from './app.controller';
import { ImportService } from './app.service';
import configs from './configs';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configs] }),
  ],
  controllers: [ImportController],
  providers: [ImportService],
})
export class ImportModule {}
