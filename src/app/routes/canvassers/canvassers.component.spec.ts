import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvassersComponent } from './canvassers.component';

describe('CanvassersComponent', () => {
  let component: CanvassersComponent;
  let fixture: ComponentFixture<CanvassersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvassersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvassersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
