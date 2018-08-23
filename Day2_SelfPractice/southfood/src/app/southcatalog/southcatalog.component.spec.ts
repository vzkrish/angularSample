import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthcatalogComponent } from './southcatalog.component';

describe('SouthcatalogComponent', () => {
  let component: SouthcatalogComponent;
  let fixture: ComponentFixture<SouthcatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthcatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthcatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
