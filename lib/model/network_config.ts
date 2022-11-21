export class NetworkConfig {
  private networkId: number = 0;
  private networkName: string = "";
  private allowToGetMemberByPhone: boolean = false;
  private allowMerchantIssueMemberCard: boolean = false;
  private avatarDefaultImg: string = "";
  private logoImg: string = "";
  private benefitWebUrl: string = "";
  private brandColor: string = "";
  private cardDefaultImg: string = "";
  private currencyImg: string = "";
  private currencyName: string = "";
  private exchangeRate: number = 0;
  private faqWebUrl: string = "";

  constructor(
    networkId: number,
    networkName: string,
    allowToGetMemberByPhone: boolean,
    allowMerchantIssueMemberCard: boolean,
    avatarDefaultImg: string,
    logoImg: string,
    benefitWebUrl: string,
    brandColor: string,
    cardDefaultImg: string,
    currencyImg: string,
    currencyName: string,
    exchangeRate: number,
    faqWebUrl: string
  ) {
    this.networkId = networkId;
    this.networkName = networkName;
    this.allowToGetMemberByPhone = allowToGetMemberByPhone;
    this.allowMerchantIssueMemberCard = allowMerchantIssueMemberCard;
    this.avatarDefaultImg = avatarDefaultImg;
    this.logoImg = logoImg;
    this.benefitWebUrl = benefitWebUrl;
    this.brandColor = brandColor;
    this.cardDefaultImg = cardDefaultImg;
    this.currencyImg = currencyImg;
    this.currencyName = currencyName;
    this.exchangeRate = exchangeRate;
    this.faqWebUrl = faqWebUrl;
  }
}
