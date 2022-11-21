"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberInfo = void 0;
class MemberInfo {
    constructor(memberQrCode, memberStaticQrCode, memberId, phone, memberCardId, name, point) {
        this.memberQrCode = "";
        this.memberStaticQrCode = "";
        this.memberId = "";
        this.phone = "";
        this.memberCardId = "";
        this.name = "";
        this.point = 0;
        this.memberQrCode = memberQrCode;
        this.memberStaticQrCode = memberStaticQrCode;
        this.memberId = memberId;
        this.phone = phone;
        this.memberCardId = memberCardId;
        this.name = name;
        this.point = point;
    }
}
exports.MemberInfo = MemberInfo;
