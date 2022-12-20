export class TopUpResult {
  private status: number = 0;
  private message: string = "";
  private orderType: number = 0;
  private orderCode: string = "";
  private merchantCode: string = "";
  private terminalCode: string = "";
  private paymentMethod: string = "";
  private amount: number = 0;
  private point: number = 0;
  private memberPhone: string = "";
  private createdAt: number = 0;

  constructor(
    status: number,
    message: string,
    orderType: number,
    orderCode: string,
    merchantCode: string,
    terminalCode: string,
    paymentMethod: string,
    amount: number,
    point: number,
    memberPhone: string,
    createAt: number
  ) {
    this.status = status;
    this.message = message;
    this.orderType = orderType;
    this.orderCode = orderCode;
    this.merchantCode = merchantCode;
    this.terminalCode = terminalCode;
    this.paymentMethod = paymentMethod;
    this.amount = amount;
    this.point = point;
    this.memberPhone = memberPhone;
    this.createdAt = createAt;
  }
}
