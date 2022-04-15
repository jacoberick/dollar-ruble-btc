import { Component, OnInit } from '@angular/core';
import { EnumService } from 'src/app/services/enum.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currencyTypeEnum!: any;

  constructor(private enumService: EnumService) {
    this.currencyTypeEnum = enumService.currencyTypeEnum;
  }

  ngOnInit(): void {}
}
