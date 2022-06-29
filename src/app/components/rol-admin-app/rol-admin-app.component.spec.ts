import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolAdminAppComponent } from './rol-admin-app.component';

describe('RolAdminAppComponent', () => {
  let component: RolAdminAppComponent;
  let fixture: ComponentFixture<RolAdminAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolAdminAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolAdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
