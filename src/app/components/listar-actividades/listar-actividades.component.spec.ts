import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActividadesComponent } from './listar-actividades.component';

describe('ListarActividadesComponent', () => {
  let component: ListarActividadesComponent;
  let fixture: ComponentFixture<ListarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
