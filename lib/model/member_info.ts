export class MemberInfo {
  private memberQrCode: string = "";
  private memberStaticQrCode: string = "";
  private memberId: string = "";
  private phone: string = "";
  private memberCardId: string = "";
  private name: string = "";
  private point: number = 0;

  constructor(
    memberQrCode: string,
    memberStaticQrCode: string,
    memberId: string,
    phone: string,
    memberCardId: string,
    name: string,
    point: number
  ) {
    this.memberQrCode = memberQrCode;
    this.memberStaticQrCode = memberStaticQrCode;
    this.memberId = memberId;
    this.phone = phone;
    this.memberCardId = memberCardId;
    this.name = name;
    this.point = point;
  }
}
