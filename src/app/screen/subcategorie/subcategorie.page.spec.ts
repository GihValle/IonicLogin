import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcategoriePage } from './subcategorie.page';

describe('SubcategoriePage', () => {
  let component: SubcategoriePage;
  let fixture: ComponentFixture<SubcategoriePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
