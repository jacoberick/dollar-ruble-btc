import { Component, Input, OnInit } from '@angular/core';
import { EnumService } from 'src/app/services/enum.service';
import { XchangeAPIService } from 'src/app/services/xchange-api.service';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss'],
})
export class CurrencyInfoComponent implements OnInit {
  currencyTypeEnum!: any;
  @Input() currencyType!: string;
  currencyValue: string = '0';
  currencySign!: string;
  countryFlag!: string;
  apiInfo!: any;

  constructor(
    private enumService: EnumService,
    private xchangeApiService: XchangeAPIService
  ) {
    this.currencyTypeEnum = enumService.currencyTypeEnum;
  }

  ngOnInit(): void {
    this.xchangeApiService.getXchangeData().subscribe((res) => {
      this.apiInfo = res;
      switch (this.currencyType) {
        case this.currencyTypeEnum.usDollar:
          this.currencySign = '$';
          this.currencyValue = this.apiInfo.rates.USD;
          this.countryFlag = '../../../assets/images/usFlag.jpg';
          break;
        case this.currencyTypeEnum.ruRuble:
          this.currencySign = '₽';
          this.currencyValue = this.apiInfo.rates.RUB;
          this.countryFlag = '../../../assets/images/russiaFlag.jpg';
          break;
        case this.currencyTypeEnum.btc:
          this.currencySign = '₿';
          this.currencyValue = this.apiInfo.rates.BTC;
          this.countryFlag = '../../../assets/images/btcLogo.png';
          break;
      }
    });
  }
}
