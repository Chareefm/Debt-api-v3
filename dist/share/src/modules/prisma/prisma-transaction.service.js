var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from "./prisma.service";
let PrismaTransactionService = class PrismaTransactionService {
    constructor(db) {
        this.db = db;
    }
    async execute(func, option) {
        const result = await this.db.$transaction((prisma) => { var _a; return func((_a = option === null || option === void 0 ? void 0 : option.prisma) !== null && _a !== void 0 ? _a : prisma); });
        return result;
    }
};
PrismaTransactionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], PrismaTransactionService);
export { PrismaTransactionService };
//# sourceMappingURL=prisma-transaction.service.js.map