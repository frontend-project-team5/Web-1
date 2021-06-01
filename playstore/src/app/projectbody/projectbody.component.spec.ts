import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectbodyComponent } from './projectbody.component';

describe('ProjectbodyComponent', () => {
  let component: ProjectbodyComponent;
  let fixture: ComponentFixture<ProjectbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
