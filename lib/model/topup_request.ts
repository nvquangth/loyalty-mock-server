export class TopUpRequest {
  private amount: number = 0;
  private txnDesc: string = "";

  constructor(amount: number, textDesc: string) {
    this.amount = amount;
    this.txnDesc = textDesc;
  }
}
