import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksMainComponent } from './social-links-main.component';

describe('SocialLinksMainComponent', () => {
  let component: SocialLinksMainComponent;
  let fixture: ComponentFixture<SocialLinksMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
