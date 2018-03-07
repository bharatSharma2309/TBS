import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideNavComponent } from './blog-side-nav.component';

describe('BlogSideNavComponent', () => {
  let component: BlogSideNavComponent;
  let fixture: ComponentFixture<BlogSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
