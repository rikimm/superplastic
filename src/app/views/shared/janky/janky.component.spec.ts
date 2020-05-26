import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JankyComponent } from './janky.component';

describe('JankyComponent', () => {
  let component: JankyComponent;
  let fixture: ComponentFixture<JankyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JankyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JankyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
