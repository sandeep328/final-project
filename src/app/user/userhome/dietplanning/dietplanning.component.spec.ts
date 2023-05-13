import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanningComponent } from './dietplanning.component';

describe('DietplanningComponent', () => {
  let component: DietplanningComponent;
  let fixture: ComponentFixture<DietplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
