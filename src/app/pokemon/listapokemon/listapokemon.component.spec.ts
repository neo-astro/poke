import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapokemonComponent } from './listapokemon.component';

describe('ListapokemonComponent', () => {
  let component: ListapokemonComponent;
  let fixture: ComponentFixture<ListapokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
