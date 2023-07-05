import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPanelComponent } from './star-panel.component';

describe('StarPanelComponent', () => {
  let component: StarPanelComponent;
  let fixture: ComponentFixture<StarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarPanelComponent]
    });
    fixture = TestBed.createComponent(StarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
