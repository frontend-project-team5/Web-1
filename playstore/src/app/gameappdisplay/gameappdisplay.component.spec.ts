import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameappdisplayComponent } from './gameappdisplay.component';

describe('GameappdisplayComponent', () => {
  let component: GameappdisplayComponent;
  let fixture: ComponentFixture<GameappdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameappdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameappdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
