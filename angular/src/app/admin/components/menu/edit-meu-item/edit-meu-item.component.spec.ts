import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeuItemComponent } from './edit-meu-item.component';

describe('EditMeuItemComponent', () => {
  let component: EditMeuItemComponent;
  let fixture: ComponentFixture<EditMeuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMeuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
