import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproductListComponent } from './aproduct-list.component';

describe('AproductListComponent', () => {
  let component: AproductListComponent;
  let fixture: ComponentFixture<AproductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
