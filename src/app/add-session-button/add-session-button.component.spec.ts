import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionButtonComponent } from './add-session-button.component';

describe('AddSessionButtonComponent', () => {
  let component: AddSessionButtonComponent;
  let fixture: ComponentFixture<AddSessionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSessionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
