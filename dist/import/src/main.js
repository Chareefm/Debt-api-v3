import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { PrismaService } from "../../share/src/modules/prisma/prisma.service";
import { ImportModule } from './app.module';
async function bootstrap() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    const app = await NestFactory.create(ImportModule);
    const configService = app.get(ConfigService);
    const prismaService = app.get(PrismaService);
    prismaService.enableShutdownHooks(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map