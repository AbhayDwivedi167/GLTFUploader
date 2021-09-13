import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLTFAppComponent } from './gltfapp.component';

describe('GLTFAppComponent', () => {
  let component: GLTFAppComponent;
  let fixture: ComponentFixture<GLTFAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GLTFAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GLTFAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
