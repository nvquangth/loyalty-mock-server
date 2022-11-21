"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkConfig = void 0;
class NetworkConfig {
    constructor(networkId, networkName, allowToGetMemberByPhone, allowMerchantIssueMemberCard, avatarDefaultImg, logoImg, benefitWebUrl, brandColor, cardDefaultImg, currencyImg, currencyName, exchangeRate, faqWebUrl) {
        this.networkId = 0;
        this.networkName = "";
        this.allowToGetMemberByPhone = false;
        this.allowMerchantIssueMemberCard = false;
        this.avatarDefaultImg = "";
        this.logoImg = "";
        this.benefitWebUrl = "";
        this.brandColor = "";
        this.cardDefaultImg = "";
        this.currencyImg = "";
        this.currencyName = "";
        this.exchangeRate = 0;
        this.faqWebUrl = "";
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
exports.NetworkConfig = NetworkConfig;
