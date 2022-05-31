/// <reference types="multer" />
import { ImportService } from './app.service';
export declare class ImportController {
    private readonly importService;
    constructor(importService: ImportService);
    upload(file: Express.Multer.File): Promise<any>;
}
