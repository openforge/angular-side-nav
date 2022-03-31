import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenModuleComponent } from './children-module.component';

describe('ChildrenModuleComponent', () => {
  let component: ChildrenModuleComponent;
  let fixture: ComponentFixture<ChildrenModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
