import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompModule1Component } from './comp-module1.component';

describe('CompModule1Component', () => {
  let component: CompModule1Component;
  let fixture: ComponentFixture<CompModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompModule1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
