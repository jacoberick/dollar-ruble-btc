import { Component, Input, OnInit } from '@angular/core';
import { EnumService } from 'src/app/services/enum.service';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss'],
})
export class CurrencyInfoComponent implements OnInit {
  currencyTypeEnum!: any;
  @Input() currencyType!: string;
  currencyValue!: string;
  currencySign!: string;
  countryFlag!: string;

  constructor(private enumService: EnumService) {
    this.currencyTypeEnum = enumService.currencyTypeEnum;
  }

  ngOnInit(): void {
    switch (this.currencyType) {
      case this.currencyTypeEnum.usDollar:
        this.currencySign = '$';
        break;
      case this.currencyTypeEnum.ruRuble:
        this.currencySign = '₽';
        break;
      case this.currencyTypeEnum.btc:
        this.currencySign = '₿';
        break;
    }
  }
}
