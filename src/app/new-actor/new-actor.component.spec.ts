import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActorComponent } from './new-actor.component';

describe('NewActorComponent', () => {
  let component: NewActorComponent;
  let fixture: ComponentFixture<NewActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewActorComponent]
    });
    fixture = TestBed.createComponent(NewActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
