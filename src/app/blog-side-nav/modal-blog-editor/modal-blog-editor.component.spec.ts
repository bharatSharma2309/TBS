import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBlogEditorComponent } from './modal-blog-editor.component';

describe('ModalBlogEditorComponent', () => {
  let component: ModalBlogEditorComponent;
  let fixture: ComponentFixture<ModalBlogEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBlogEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBlogEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
