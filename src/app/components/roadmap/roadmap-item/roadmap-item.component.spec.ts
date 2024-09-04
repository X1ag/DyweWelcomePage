import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapItemComponent } from './roadmap-item.component';

describe('RoadmapItemComponent', () => {
  let component: RoadmapItemComponent;
  let fixture: ComponentFixture<RoadmapItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
