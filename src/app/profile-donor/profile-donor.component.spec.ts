import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDonorComponent } from './profile-donor.component';

describe('ProfileDonorComponent', () => {
  let component: ProfileDonorComponent;
  let fixture: ComponentFixture<ProfileDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
