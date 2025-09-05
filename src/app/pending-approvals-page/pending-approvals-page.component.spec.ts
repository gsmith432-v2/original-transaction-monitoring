import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalsPageComponent } from './pending-approvals-page.component';

describe('PendingApprovalsPageComponent', () => {
  let component: PendingApprovalsPageComponent;
  let fixture: ComponentFixture<PendingApprovalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingApprovalsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingApprovalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
