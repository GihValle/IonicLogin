import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverCodePage } from './recover-code.page';

describe('RecoverCodePage', () => {
  let component: RecoverCodePage;
  let fixture: ComponentFixture<RecoverCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
