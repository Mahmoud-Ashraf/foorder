import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsDetailsComponent } from './resturants-details.component';

describe('ResturantsDetailsComponent', () => {
  let component: ResturantsDetailsComponent;
  let fixture: ComponentFixture<ResturantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
