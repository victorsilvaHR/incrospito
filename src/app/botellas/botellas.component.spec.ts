import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotellasComponent } from './botellas.component';

describe('BotellasComponent', () => {
  let component: BotellasComponent;
  let fixture: ComponentFixture<BotellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotellasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
