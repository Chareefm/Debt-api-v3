import { PrismaService } from '@share/modules/prisma/prisma.service';
import { TQueryClient } from '@share/modules/prisma/types';
import { OA } from '@prisma/client';
export declare class OARepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: number): Promise<OA>;
    create(data: Omit<OA, 'id'>, option?: {
        prisma?: TQueryClient;
    }): Promise<OA>;
    updateById({ id, data }: {
        id: number;
        data: Partial<Omit<OA, 'id'>>;
    }, option?: {
        prisma?: TQueryClient;
    }): Promise<OA>;
}
