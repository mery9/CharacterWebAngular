import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPartPageComponent } from './avatar-part-page.component';

describe('AvatarPartPageComponent', () => {
  let component: AvatarPartPageComponent;
  let fixture: ComponentFixture<AvatarPartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarPartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarPartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
