import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberPlayerComponent } from './remember-player.component';

describe('RememberPlayerComponent', () => {
  let component: RememberPlayerComponent;
  let fixture: ComponentFixture<RememberPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RememberPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
