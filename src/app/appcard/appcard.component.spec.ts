import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcardComponent } from './appcard.component';

describe('AppcardComponent', () => {
  let component: AppcardComponent;
  let fixture: ComponentFixture<AppcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppcardComponent]
    });
    fixture = TestBed.createComponent(AppcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
