import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPageLComponent } from './hero-page-l.component';

describe('HeroPageLComponent', () => {
  let component: HeroPageLComponent;
  let fixture: ComponentFixture<HeroPageLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPageLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPageLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
