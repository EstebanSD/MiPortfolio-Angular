import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectativasComponent } from './espectativas.component';

describe('EspectativasComponent', () => {
  let component: EspectativasComponent;
  let fixture: ComponentFixture<EspectativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspectativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspectativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
