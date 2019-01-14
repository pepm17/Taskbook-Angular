import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamsComponent } from './myteams.component';

describe('MyteamsComponent', () => {
  let component: MyteamsComponent;
  let fixture: ComponentFixture<MyteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
