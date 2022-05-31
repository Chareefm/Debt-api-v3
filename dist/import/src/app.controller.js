var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Post, UseInterceptors, UploadedFile, } from '@nestjs/common';
import { ImportService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as papa from 'papaparse';
let ImportController = class ImportController {
    constructor(importService) {
        this.importService = importService;
    }
    async upload(file) {
        const foo = papa.parse(file.buffer.toString('utf-8'), {
            delimiter: '|',
            header: true,
            skipEmptyLines: true,
        });
        const result = await this.importService.saveToDb(foo.data);
        return { result };
    }
};
__decorate([
    Post(''),
    UseInterceptors(FileInterceptor('file')),
    __param(0, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImportController.prototype, "upload", null);
ImportController = __decorate([
    Controller('import'),
    __metadata("design:paramtypes", [ImportService])
], ImportController);
export { ImportController };
//# sourceMappingURL=app.controller.js.map