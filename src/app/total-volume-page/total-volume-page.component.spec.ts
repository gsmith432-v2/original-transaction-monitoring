import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVolumePageComponent } from './total-volume-page.component';

describe('TotalVolumePageComponent', () => {
  let component: TotalVolumePageComponent;
  let fixture: ComponentFixture<TotalVolumePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVolumePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalVolumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
