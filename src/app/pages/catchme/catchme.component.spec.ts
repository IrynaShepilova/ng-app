import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchmeComponent } from './catchme.component';

describe('CatchmeComponent', () => {
  let component: CatchmeComponent;
  let fixture: ComponentFixture<CatchmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
