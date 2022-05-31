import { PrismaService } from '@share/modules/prisma/prisma.service';
import { TDebtRaw } from '@share/types/debt.interface';
export declare class ImportService {
    private db;
    constructor(db: PrismaService);
    saveToDb(data: TDebtRaw[]): Promise<boolean>;
}
