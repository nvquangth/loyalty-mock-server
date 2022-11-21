export class Order {
  private orderId: string = "";
  private orderAmount: number = 0;

  constructor(orderId: string, orderAmount: number) {
    this.orderId = orderId;
    this.orderAmount = orderAmount;
  }
}
