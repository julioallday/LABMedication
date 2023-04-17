import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicationHistoryComponent } from './patient-medication-history.component';

describe('PatientMedicationHistoryComponent', () => {
  let component: PatientMedicationHistoryComponent;
  let fixture: ComponentFixture<PatientMedicationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMedicationHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientMedicationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
