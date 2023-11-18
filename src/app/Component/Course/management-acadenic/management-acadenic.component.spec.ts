import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAcadenicComponent } from './management-acadenic.component';

describe('ManagementAcadenicComponent', () => {
  let component: ManagementAcadenicComponent;
  let fixture: ComponentFixture<ManagementAcadenicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementAcadenicComponent]
    });
    fixture = TestBed.createComponent(ManagementAcadenicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
