import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCourseComponent } from './see-course.component';

describe('SeeCourseComponent', () => {
  let component: SeeCourseComponent;
  let fixture: ComponentFixture<SeeCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeCourseComponent]
    });
    fixture = TestBed.createComponent(SeeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
