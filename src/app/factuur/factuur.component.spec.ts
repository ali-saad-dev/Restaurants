import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuurComponent } from './factuur.component';

describe('FactuurComponent', () => {
  let component: FactuurComponent;
  let fixture: ComponentFixture<FactuurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactuurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactuurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
