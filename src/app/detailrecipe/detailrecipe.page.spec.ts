import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailrecipePage } from './detailrecipe.page';

describe('DetailrecipePage', () => {
  let component: DetailrecipePage;
  let fixture: ComponentFixture<DetailrecipePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailrecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
