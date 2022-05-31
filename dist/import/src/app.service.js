var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../share/src/modules/prisma/prisma.service";
let ImportService = class ImportService {
    constructor(db) {
        this.db = db;
    }
    async saveToDb(data) {
        const items = data.map((v) => {
            console.log('+++++++++++++++++++');
            console.log(v.CHN);
            if (v.CHN === 'LN') {
                console.log(v.CHN + '------------------------');
                const { CID: cid, CIF: cif, SUBT: subt, SUBT_DESC: subt_desc, ZMKTCD: zmktcd, ZMKTCD_DESC: zmktcd_desc, DTNT: dtnt, MDT: mdt, CRLMT: crlmt, PMT: pmt, SCHNUM: schnum, ONP: onp, LPDT: lpdt, IRN: irn, GTDUE: gtdue, CNTCR: cntcr, DIST1FRE: dist1fre, INDEX: index, PCTO: pcto, DLCAF: dlcaf, BAL: bal, ACR: acr, LCHG: lchg, PONPT: ponpt, POIF: poif, POVALD: povald, PROVCAT: provcat, ZFWOD: zfwod, ZSUBAC: zsubac, ZMASTER: zmaster, STAT: stat } = v, detail = __rest(v, ["CID", "CIF", "SUBT", "SUBT_DESC", "ZMKTCD", "ZMKTCD_DESC", "DTNT", "MDT", "CRLMT", "PMT", "SCHNUM", "ONP", "LPDT", "IRN", "GTDUE", "CNTCR", "DIST1FRE", "INDEX", "PCTO", "DLCAF", "BAL", "ACR", "LCHG", "PONPT", "POIF", "POVALD", "PROVCAT", "ZFWOD", "ZSUBAC", "ZMASTER", "STAT"]);
                return {
                    status: 'INIT',
                    chn: v.CHN.toString(),
                    cid: +cid,
                    cif: +cif,
                    subt: +subt,
                    subt_desc: +subt_desc,
                    zmktcd: +zmktcd,
                    zmktcd_desc: +zmktcd,
                    dtnt: BigInt(dtnt),
                    mdt: BigInt(mdt),
                    crlmt: +crlmt,
                    pmt: +pmt,
                    schnum: +schnum,
                    onp: +onp,
                    lpdt: BigInt(lpdt),
                    irn: +irn,
                    gtdue: +gtdue,
                    cntcr: +cntcr,
                    dist1fre: +dist1fre,
                    index: +index,
                    pcto: +pcto,
                    dlcaf: +dlcaf,
                    bal: +bal,
                    acr: +acr,
                    lchg: +lchg,
                    ponpt: +ponpt,
                    poif: poif,
                    povald: BigInt(povald),
                    provcat: provcat,
                    zfwod: BigInt(zfwod),
                    zsubac: zsubac,
                    zmaster: zmaster,
                    stat: stat,
                    detail: detail,
                };
            }
            throw new Error('NOT YET CODE FOR THIS TYPE');
        });
        await this.db.$transaction(async (db) => {
            await db.debt.createMany({ data: items });
        });
        console.log(items);
        return true;
    }
};
ImportService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ImportService);
export { ImportService };
//# sourceMappingURL=app.service.js.map