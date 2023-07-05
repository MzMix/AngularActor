import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPanelComponent } from './actor-panel.component';

describe('ActorPanelComponent', () => {
  let component: ActorPanelComponent;
  let fixture: ComponentFixture<ActorPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorPanelComponent]
    });
    fixture = TestBed.createComponent(ActorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
