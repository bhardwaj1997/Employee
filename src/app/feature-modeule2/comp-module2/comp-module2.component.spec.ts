import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompModule2Component } from './comp-module2.component';

describe('CompModule2Component', () => {
  let component: CompModule2Component;
  let fixture: ComponentFixture<CompModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompModule2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
