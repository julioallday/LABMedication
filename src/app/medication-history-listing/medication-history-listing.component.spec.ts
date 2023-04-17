import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationHistoryListingComponent } from './medication-history-listing.component';

describe('MedicationHistoryListingComponent', () => {
  let component: MedicationHistoryListingComponent;
  let fixture: ComponentFixture<MedicationHistoryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationHistoryListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationHistoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
