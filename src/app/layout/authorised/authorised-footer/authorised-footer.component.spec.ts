import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedFooterComponent } from './authorised-footer.component';

describe('AuthorisedFooterComponent', () => {
  let component: AuthorisedFooterComponent;
  let fixture: ComponentFixture<AuthorisedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
