import { PrismaService } from '@share/modules/prisma/prisma.service';
import { TQueryClient } from '@share/modules/prisma/types';
export declare class PrismaTransactionService {
    private db;
    constructor(db: PrismaService);
    execute<T>(func: (prisma?: TQueryClient) => Promise<T>, option?: {
        prisma?: TQueryClient;
    }): Promise<T>;
}
