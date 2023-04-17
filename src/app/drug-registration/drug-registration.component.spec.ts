import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugRegistrationComponent } from './drug-registration.component';

describe('DrugRegistrationComponent', () => {
  let component: DrugRegistrationComponent;
  let fixture: ComponentFixture<DrugRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
