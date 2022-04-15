import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-base-buttons',
  templateUrl: './select-base-buttons.component.html',
  styleUrls: ['./select-base-buttons.component.scss'],
})
export class SelectBaseButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event) {
    const allButtons = Array.from(
      document.getElementsByClassName('select-base-buttons')
    );
    const targetButton = e.target as HTMLButtonElement;
    allButtons.forEach((b) => b.classList.remove('selected'));
    targetButton!.classList.add('selected');
  }
}
