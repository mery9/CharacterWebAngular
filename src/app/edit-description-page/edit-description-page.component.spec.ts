import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDescriptionPageComponent } from './edit-description-page.component';

describe('EditDescriptionPageComponent', () => {
  let component: EditDescriptionPageComponent;
  let fixture: ComponentFixture<EditDescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDescriptionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
