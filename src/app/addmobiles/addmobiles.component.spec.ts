import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmobilesComponent } from './addmobiles.component';

describe('AddmobilesComponent', () => {
  let component: AddmobilesComponent;
  let fixture: ComponentFixture<AddmobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
