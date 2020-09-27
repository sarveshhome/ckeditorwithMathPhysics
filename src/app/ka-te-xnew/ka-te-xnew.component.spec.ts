import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaTeXNewComponent } from './ka-te-xnew.component';

describe('KaTeXNewComponent', () => {
  let component: KaTeXNewComponent;
  let fixture: ComponentFixture<KaTeXNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaTeXNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaTeXNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
