var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { OARepository } from "../../repositories/OA.repository";
import { PrismaTransactionService } from './prisma-transaction.service';
import { PrismaService } from './prisma.service';
const services = [PrismaService, PrismaTransactionService, OARepository];
let PrismaModule = class PrismaModule {
};
PrismaModule = __decorate([
    Module({
        providers: [...services],
        exports: [...services],
    })
], PrismaModule);
export { PrismaModule };
//# sourceMappingURL=prisma.module.js.map