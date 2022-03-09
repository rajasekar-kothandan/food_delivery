import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HproductListComponent } from './hproduct-list.component';

describe('HproductListComponent', () => {
  let component: HproductListComponent;
  let fixture: ComponentFixture<HproductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HproductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
