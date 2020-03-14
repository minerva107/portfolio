import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaprincipalComponent } from './paginaprincipal.component';

describe('Componente2Component', () => {
  let component: PaginaprincipalComponent;
  let fixture: ComponentFixture<PaginaprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
