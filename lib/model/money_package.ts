export class MoneyPackage {
  private value: number = 0;
  private currency: string = "VND";

  constructor(value: number, currency: string) {
    this.value = value;
    this.currency = currency;
  }
}

export class MoneyPackages {
  private moneyPackages: [MoneyPackage];

  constructor(packages: [MoneyPackage]) {
    this.moneyPackages = packages;
  }
}
