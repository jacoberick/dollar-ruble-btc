import { Injectable } from '@angular/core';

enum currencyTypeEnum {
  usDollar = 'us dollar',
  ruRuble = 'ru ruble',
  btc = 'btc',
}

@Injectable({
  providedIn: 'root',
})
export class EnumService {
  currencyTypeEnum: typeof currencyTypeEnum = currencyTypeEnum;
  constructor() {}
}
