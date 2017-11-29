import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarLeftComponent } from './user-bar-left.component';

describe('UserBarLeftComponent', () => {
  let component: UserBarLeftComponent;
  let fixture: ComponentFixture<UserBarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
