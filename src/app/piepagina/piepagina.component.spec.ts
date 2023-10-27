import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepaginaComponent } from './piepagina.component';

describe('PiepaginaComponent', () => {
  let component: PiepaginaComponent;
  let fixture: ComponentFixture<PiepaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiepaginaComponent]
    });
    fixture = TestBed.createComponent(PiepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
