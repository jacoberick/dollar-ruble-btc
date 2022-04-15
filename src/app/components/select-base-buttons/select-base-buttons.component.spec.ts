import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBaseButtonsComponent } from './select-base-buttons.component';

describe('SelectBaseButtonsComponent', () => {
  let component: SelectBaseButtonsComponent;
  let fixture: ComponentFixture<SelectBaseButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBaseButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBaseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
