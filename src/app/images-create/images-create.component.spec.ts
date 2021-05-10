import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCreateComponent } from './images-create.component';

describe('ImagesCreateComponent', () => {
  let component: ImagesCreateComponent;
  let fixture: ComponentFixture<ImagesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
